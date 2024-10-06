package com.vente_voiture.site_vente_voiture.repository;

import com.vente_voiture.site_vente_voiture.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
