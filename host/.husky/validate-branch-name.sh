#!/bin/sh

: "${SKIP_BRANCHES:=main master develop}"
: "${JIRA_PATTERN:=INXT-[0-9]+}"

BRANCH_NAME="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"

if [ -z "$BRANCH_NAME" ] || [ "$BRANCH_NAME" = "HEAD" ]; then
  echo "❌ ERROR: Unable to determine current branch."
  exit 1
fi

for skip in $SKIP_BRANCHES; do
  if [ "$BRANCH_NAME" = "$skip" ]; then
    exit 0
  fi
done

echo "$BRANCH_NAME" | grep -qE "$JIRA_PATTERN"
if [ $? -ne 0 ]; then
  echo ""
  echo "❌ ERROR: Branch name must contain a Jira ticket (e.g., INXT-12345)."
  echo "Current branch: $BRANCH_NAME"
  echo ""
  exit 1
fi

exit 0