<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:url value="/alteraEmpresa" var="linkServletAlteraEmpresa"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<form action="${ linkServletAlteraEmpresa }" method="post">
		Nome: <input type="text" name="nome" value="${empresa.nome}">
		Data Abertura: <input type="text" name="data" value="${empresa.DataAbertura}">
		<input type="submit">
	</form>

</body>
</html>