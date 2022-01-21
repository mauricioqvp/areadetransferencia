package com.estepinformatica.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_frases")
public class Frases implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long frasesId;
	private Integer qtdUsos;
	private String frases;
	private Long tipo;
	
	public Frases() {
	}

	public Frases(Long frasesId, Integer qtdUsos, String frases, Long tipo) {
		super();
		this.frasesId = frasesId;
		this.qtdUsos = qtdUsos;
		this.frases = frases;
		this.tipo = tipo;
	}

	public Long getFrasesId() {
		return frasesId;
	}

	public void setFrasesId(Long frasesId) {
		this.frasesId = frasesId;
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

	public void setFrases(String frases) {
		this.frases = frases;
	}

	public Long getTipo() {
		return tipo;
	}

	public void setTipo(Long tipo) {
		this.tipo = tipo;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
