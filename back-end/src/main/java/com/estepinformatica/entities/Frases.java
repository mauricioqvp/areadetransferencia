package com.estepinformatica.entities;

import java.io.Serializable;

public class Frases implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Integer qtdUsos;
	private String frase;
	private Integer tipo;
	
	public Frases() {
	}

	public Frases(Integer qtdUsos, String frase, Integer tipo) {
		this.qtdUsos = qtdUsos;
		this.frase = frase;
		this.tipo = tipo;
	}

	public Integer getQtdUsos() {
		return qtdUsos;
	}

	public void setQtdUsos(Integer qtdUsos) {
		this.qtdUsos = qtdUsos;
	}

	public String getFrase() {
		return frase;
	}

	public void setFrase(String frase) {
		this.frase = frase;
	}

	public Integer getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
		this.tipo = tipo;
	}
}
