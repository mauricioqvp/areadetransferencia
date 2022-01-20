package com.estepinformatica.entities;

import java.io.Serializable;

public class Categorias implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String categoria;
	
	public Categorias() {
		super();
	}

	public Categorias(Integer id, String categoria) {
		super();
		this.id = id;
		this.categoria = categoria;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
