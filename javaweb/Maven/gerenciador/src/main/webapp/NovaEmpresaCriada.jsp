<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
	String nomeEmpresa = (String)request.getAttribute("nomeEmpresa");
	System.out.println(nomeEmpresa);
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	Empresa <%= nomeEmpresa %> cadastrada com sucesso
</body>
</html>