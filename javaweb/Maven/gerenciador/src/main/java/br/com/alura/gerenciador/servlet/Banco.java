package br.com.alura.gerenciador.servlet;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Banco {
	
	private static List<Empresa> lista = new ArrayList<>();
	private static Integer chaveSequencial = 1;
	
	public void adiciona(Empresa empresa) {
		empresa.setId(chaveSequencial ++);
		lista.add(empresa);
	}
	
	public List<Empresa> getEmpresas(){
		return Banco.lista;
		
	}

	public void removeEmpresa(Integer paramID) {
		Iterator<Empresa> it  = lista.iterator();
		while(it.hasNext()) {
			Empresa emp = it.next();
			if(emp.getId()==paramID) {
				it.remove();
			}
		}
	}

	public Empresa buscaEmpresaPelaID(Integer iD) {
		for (Empresa empresa : lista) {
			if(empresa.getId() == iD) {
				return empresa;
			}
		}
		return null;
	}
}
