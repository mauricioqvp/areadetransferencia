package com.estepinformatica.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estepinformatica.dto.FrasesDTO;
import com.estepinformatica.services.FrasesService;

@RestController
@RequestMapping(value = "/frases")
public class FrasesController {
	
	@Autowired
	private FrasesService frasesService;
	
	@GetMapping
	public Page<FrasesDTO> findAllPaged(Pageable pageable) {
		return frasesService.findAllPaged(pageable);
	}
	
	@PutMapping(value = "/{id}")
	public FrasesDTO updateFrases(@PathVariable Long id, @RequestBody FrasesDTO dto) {
		FrasesDTO frasesDTO = frasesService.update(id, dto);
		return frasesDTO;
	}

}
