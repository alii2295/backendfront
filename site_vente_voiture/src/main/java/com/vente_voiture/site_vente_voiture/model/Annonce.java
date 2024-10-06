package com.vente_voiture.site_vente_voiture.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_annonce;
    private String model;
    private String matricule;
    private String kilometrage;
    private String carburant;
    private byte[] image;
    /*private String photo;*/
    @ManyToOne
    @JoinColumn(name="id_user")
    private User user;





}
