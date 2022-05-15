$(document).on("click", "#btnSave", function(event)
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
// Form validation-------------------
var status = validatePowerForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 
// If valid------------------------
var type = ($("#hidconsumtiopn_idSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "PowerAPI", 
 type : type, 
 data : $("#formPower").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onPowerSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onPowerSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divPowerGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hidconsumtiopn_idSave").val(""); 
$("#formPower")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hidconsumtiopn_idSave").val($(this).data("consumtiopn_id"));
		$("#consumtiopn_id").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#accountnumber").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#Name").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#Type").val($(this).closest("tr").find('td:eq(3)').text()); 
	 $("#Date").val($(this).closest("tr").find('td:eq(4)').text());
		$("#Usages").val($(this).closest("tr").find('td:eq(5)').text()); 
		$("#Description").val($(this).closest("tr").find('td:eq(6)').text()); 
		});




$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "PowerAPI", 
		 type : "DELETE", 
		 data : "consumtiopn_id=" + $(this).data("consumtiopn_id"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
		 onPowerDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onPowerDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divPowerGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}


// CLIENT-MODEL================================================================
function validatePowerForm()
{
	// accountnumber
	if ($("#accountnumber").val().trim() == "")
	{
	return "Insert Account Number.";
	}
	// NAME
	if ($("#Name").val().trim() == "")
	{
	return "Insert Name";
}
	// Type
	if ($("#Type").val().trim() == "")
	{
	return "Insert Type";
}
// Date
	if ($("#Date").val().trim() == "")
	{
	return "Insert Date";
}
// Usages
	if ($("#Usages").val().trim() == "")
	{
	return "Insert Usages";
}



		


// DESCRIPTION------------------------
if ($("#Description").val().trim() == ""){
	
	return "Insert Description";
}
	return true;
}