package com.estepinformatica.entities;

import java.io.Serializable;

public class Categorias implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Integer categoriasId;
	private String categoria;
	
	public Categorias() {
		super();
	}

	public Categorias(Integer categoriasId, String categoria) {
		super();
		this.categoriasId = categoriasId;
		this.categoria = categoria;
	}

	public Integer getCategoriasId() {
		return categoriasId;
	}

	public void setCategoriasId(Integer categoriasId) {
		this.categoriasId = categoriasId;
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
