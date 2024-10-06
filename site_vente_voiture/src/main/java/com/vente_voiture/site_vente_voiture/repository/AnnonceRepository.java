package com.vente_voiture.site_vente_voiture.repository;

import com.vente_voiture.site_vente_voiture.model.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnnonceRepository extends JpaRepository<Annonce,Long> {
}
