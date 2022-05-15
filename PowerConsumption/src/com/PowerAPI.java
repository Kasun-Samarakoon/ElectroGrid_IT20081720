package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class PowerAPI
 */
@WebServlet("/PowerAPI")
public class PowerAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Power powerconsumptionObj = new Power();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public PowerAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = powerconsumptionObj.insertpowerconsumption(request.getParameter("account_number"), 
				   request.getParameter("name"), 
				   request.getParameter("type"),
				  request.getParameter("date"), 
				 request.getParameter("usages"), 
				   request.getParameter("description"));
					
		response.getWriter().write(output);

		doGet(request, response);
	}
	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request); 
		 String output = powerconsumptionObj.updatepowerconsumption(paras.get("hidconsumtiopn_idSave").toString(), 
				 							paras.get("account_number").toString(),
				 							paras.get("name").toString(), 
				 							paras.get("type").toString(), 
				 							paras.get("date").toString(),
				 							paras.get("usages").toString(), 
				 							paras.get("description").toString()); 
		response.getWriter().write(output); 
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request); 
		 String output = powerconsumptionObj.deletepowerconsumption(paras.get("consumtiopn_id").toString()); 
		response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) 
	{ 
	 Map<String, String> map = new HashMap<String, String>(); 
	try
	 { 
	 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8"); 
	 String queryString = scanner.hasNext() ? 
	 scanner.useDelimiter("\\A").next() : ""; 
	 scanner.close(); 
	 String[] params = queryString.split("&"); 
	 for (String param : params) 
	 {
		 String[] p = param.split("=");
		 map.put(p[0], p[1]); 
		 } 
		 } 
		catch (Exception e) 
		 { 
		 } 
		return map; 
		}
}
	



