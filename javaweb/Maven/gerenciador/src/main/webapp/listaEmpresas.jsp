<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.List, br.com.alura.gerenciador.servlet.Empresa"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:url value="removeEmpresa" var="linkServletRemoveEmpresa"/>
<c:url value="mostraEmpresa" var="linkServletMostraEmpresa"/>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Java standard taglib</title>
</head>
<body>
	<c:if test="${not empty empresa}">
		Empresa ${ empresa } cadastrada com sucesso!
	</c:if>
	Lista de empresas: <br /> 
		<ul>
			<c:forEach items="${empresas}" var="empresa">
				
				<li>
					${empresa.nome} - <fmt:formatDate value="${empresa.dataAbertura}" pattern="dd/MM/yyyy"/>
					<a href="${linkServletRemoveEmpresa}?id=${empresa.id}" >remove</a>
					<a href="${linkServletMostraEmpresa}?id=${empresa.id}" >Editar</a>
				</li>
			</c:forEach>
		</ul>
</body>
</html>