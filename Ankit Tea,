<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ankit Team LMS</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
        }
        .sidebar {
            width: 250px;
            background: linear-gradient(to right, #4CAF50, #3F51B5);
            color: white;
            height: 100vh;
            padding: 20px;
        }
        .sidebar h2 {
            text-align: center;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
        }
        .sidebar ul li {
            padding: 15px;
            cursor: pointer;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .sidebar ul li:hover, .active {
            background: rgba(255, 255, 255, 0.2);
        }
        .main-content {
            flex: 1;
            padding: 20px;
            background: #f4f4f4;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        .team-section {
            margin-top: 20px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        .buttons {
            margin-top: 10px;
        }
        .buttons button {
            margin-right: 5px;
            padding: 10px;
            background: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .buttons button:hover {
            background: #45a049;
        }
    </style>
    <script>
        function addEntry() {
            let table = document.getElementById("salesTable");
            let row = table.insertRow();
            row.innerHTML = `
                <td><input type='text' placeholder='Name'></td>
                <td><input type='text' placeholder='Designation'></td>
                <td><input type='number' placeholder='Daily Target' onfocus='showTotalTarget()'></td>
                <td><input type='number' placeholder='Target Achieved'></td>
                <td><button onclick='deleteRow(this)'>Delete</button></td>
            `;
        }
        function deleteRow(button) {
            let row = button.parentElement.parentElement;
            row.remove();
        }
        function showTotalTarget() {
            let total = 0;
            document.querySelectorAll("#salesTable input[type='number']").forEach(input => {
                if (input.placeholder === 'Daily Target') {
                    total += Number(input.value) || 0;
                }
            });
            alert("Total Daily Target: " + total);
        }
    </script>
</head>
<body>
    <div class="sidebar">
        <h2>Ankit Team LMS</h2>
        <ul>
            <li class="active">Dashboard</li>
            <li>Manage Sales Executives</li>
            <li>Daily Targets</li>
            <li>Reports</li>
            <li>Settings</li>
            <li>Logout</li>
        </ul>
    </div>
    <div class="main-content">
        <header>
            <input type="text" placeholder="Search Executive">
            <div class="user-info">
                <span>🔔</span>
                <span>Ankit Choudhary</span>
            </div>
        </header>
        <div class="team-section">
            <h3>Sales Executive Details</h3>
            <table id="salesTable">
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Daily Target</th>
                    <th>Target Achieved</th>
                    <th>Actions</th>
                </tr>
            </table>
            <div class="buttons">
                <button onclick="addEntry()">Add Entry</button>
            </div>
        </div>
    </div>
</body>
</html>
