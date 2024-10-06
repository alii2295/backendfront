
package com.vente_voiture.site_vente_voiture.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnnonceDTO {
    private String model;
    private String matricule;
    private String kilometrage;
    private String carburant;
    private byte[] image; // Vous pouvez également utiliser un String pour l'URL ou le base64
}

