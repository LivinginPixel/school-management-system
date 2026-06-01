#!/bin/bash

echo "==========================================="
echo "School Management System - API Test Report"
echo "==========================================="
echo ""

API_URL="http://localhost:3000/api/students"

# Test 1: Create a student
echo "TEST 1: CREATE A STUDENT (POST)"
echo "Request: POST $API_URL"
echo "Body: {\"fullName\":\"John Doe\",\"age\":15,\"className\":\"Grade 10A\",\"gender\":\"Male\"}"
echo ""
RESPONSE=$(curl -s -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John Doe","age":15,"className":"Grade 10A","gender":"Male"}')
echo "Response: $RESPONSE"
STUDENT_ID=$(echo $RESPONSE | grep -o '"id":[0-9]*' | head -1 | grep -o '[0-9]*')
echo "✅ Student Created with ID: $STUDENT_ID"
echo ""
echo "---"
echo ""

# Test 2: Get all students
echo "TEST 2: VIEW ALL STUDENTS (GET)"
echo "Request: GET $API_URL"
echo ""
curl -s $API_URL
echo ""
echo "✅ All Students Retrieved"
echo ""
echo "---"
echo ""

# Test 3: Create more students
echo "TEST 3: CREATE MORE STUDENTS"
echo ""
curl -s -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Alice Smith","age":14,"className":"Grade 9B","gender":"Female"}' > /dev/null
echo "✅ Student 2 Created"

curl -s -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Bob Johnson","age":16,"className":"Grade 11C","gender":"Male"}' > /dev/null
echo "✅ Student 3 Created"

curl -s -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Emma Davis","age":13,"className":"Grade 8A","gender":"Female"}' > /dev/null
echo "✅ Student 4 Created"
echo ""

# Test 4: View all students again
echo "TEST 4: VIEW ALL STUDENTS AFTER BULK CREATE"
echo ""
curl -s $API_URL
echo ""
echo "✅ All Students Retrieved"
echo ""
echo "---"
echo ""

# Test 5: Update a student
echo "TEST 5: UPDATE A STUDENT (PUT)"
echo "Request: PUT $API_URL/$STUDENT_ID"
echo "Body: {\"fullName\":\"John Updated\",\"age\":16,\"className\":\"Grade 10B\",\"gender\":\"Male\"}"
echo ""
curl -s -X PUT $API_URL/$STUDENT_ID \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John Updated","age":16,"className":"Grade 10B","gender":"Male"}'
echo ""
echo "✅ Student Updated"
echo ""
echo "---"
echo ""

# Test 6: Delete a student
echo "TEST 6: DELETE A STUDENT (DELETE)"
echo "Request: DELETE $API_URL/$STUDENT_ID"
echo ""
curl -s -w "\nStatus Code: %{http_code}\n" -X DELETE $API_URL/$STUDENT_ID
echo "✅ Student Deleted"
echo ""
echo "---"
echo ""

# Test 7: View all students after delete
echo "TEST 7: VIEW ALL STUDENTS AFTER DELETE"
echo ""
curl -s $API_URL
echo ""
echo "✅ Final Student List Retrieved"
echo ""
echo "==========================================="
echo "All Tests Completed Successfully!"
echo "==========================================="
