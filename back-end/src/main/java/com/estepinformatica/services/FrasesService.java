package com.estepinformatica.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.estepinformatica.dto.FrasesDTO;
import com.estepinformatica.entities.Frases;
import com.estepinformatica.repositories.FrasesRepository;

@Service
public class FrasesService {
	
	@Autowired
	private FrasesRepository frasesRepository;
	
	@Transactional(readOnly = true)
	public Page<FrasesDTO> findAllPaged(Pageable pageable) {
			Page<Frases> result = frasesRepository.findAll(pageable);
			Page<FrasesDTO> page = result.map(x -> new FrasesDTO(x));
		return page;
	}

	@Transactional
	public FrasesDTO update(Long id, FrasesDTO dto) {
		try {
			Frases entity = frasesRepository.getOne(id);
			copyDtoToEntity(dto, entity);
			entity = frasesRepository.save(entity);
			return new FrasesDTO(entity);
		} catch (EntityNotFoundException e) {
			throw e;
		}
	}
	
	private void copyDtoToEntity(FrasesDTO dto, Frases entity) {
		entity.setFrases(dto.getFrases());
		entity.setQtdUsos(dto.getQtdUsos());
		entity.setTipo(entity.getTipo());
		entity.setFrasesId(entity.getFrasesId());
	}
}
