package com.vente_voiture.site_vente_voiture.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {
    private String nom;
    private String prenom;
    private String password;
    private String email;
}
