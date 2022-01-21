package com.estepinformatica.dto;

import com.estepinformatica.entities.Frases;

public class FrasesDTO {

	private Long id;
	private Integer qtdUsos;
	private String frases;
	private Long tipo;
	
	public FrasesDTO() {
	}

	public FrasesDTO(Long id, Integer qtdUsos, String frases, Long tipo) {
		this.id = id;
		this.qtdUsos = qtdUsos;
		this.frases = frases;
		this.tipo = tipo;
	}
	
	public FrasesDTO(Frases frase) {
		this.id = frase.getFrasesId();
		this.qtdUsos = frase.getQtdUsos();
		this.frases = frase.getFrases();
		this.tipo = frase.getTipo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getQtdUsos() {
		return qtdUsos;
	}

	public void setQtdUsos(Integer qtdUsos) {
		this.qtdUsos = qtdUsos;
	}

	public String getFrases() {
		return frases;
	}

	public void setFrase(String frases) {
		this.frases = frases;
	}

	public Long getTipo() {
		return tipo;
	}

	public void setTipo(Long tipo) {
		this.tipo = tipo;
	}
}
