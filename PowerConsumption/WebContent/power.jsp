<%@page import="com.Power"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>

<body style="background-color:#f0fadc;">
<meta charset="ISO-8859-1">
<title>Power Consumption Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/power.js"></script>
</head>
<body> 
<div class="container"><div class="row"><div class="col-6"> 
<h1 class="p-3 mb-2 bg-primary text-white"><center>Electro GRID</center></h1>

<h1><u> <center>Power Consumption Management </center></u></h1>

<br>
<form id="formPower" name="formPower" method="post" action="power.jsp">
<b> Account_Number: </b> 
 <input id="accountnumber" name="account_number" type="text" 
 class="form-control form-control-sm">
 <br><b> Name: </b>
 <input id="Name" name="name" type="text" 
 class="form-control form-control-sm">
 <br><b> Type: </b>
 <input id="Type" name="type" type="text" 
 class="form-control form-control-sm">
 <br><b> Date: </b>
 <input id="Date" name="date" type="text" 
 class="form-control form-control-sm">
 <br><b>
 Usages: </b>
 <input id="Usages" name="usages" type="text" 
 class="form-control form-control-sm">
 <br><b>
 Description: </b>
 <input id="Description" name="description" type="text" 
 class="form-control form-control-sm">
 <br><center>
 <input id="btnSave" name="btnSave" type="button" value="Save" 
 class="btn btn-primary">
 <input type="hidden" id="hidconsumtiopn_idSave" 
 name="hidconsumtiopn_idSave" value=""></center>
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>

<div id="divPowersGrid">
 <%
 Power powerconsumptionObj = new Power(); 
 out.print(powerconsumptionObj.readpowerconsumption()); 
 %>
</div>
</div> </div> </div> 
</body>
</html>