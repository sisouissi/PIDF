export const connectivitesData = {
    immunologyWorkup: {
        title: "Quel bilan immunologique demander ?",
        steps: [
            {
                id: 1,
                title: "ÉTAPE 1 : Bilan de première intention (systématique)",
                borderColor: "border-blue-500", bgColor: "bg-blue-50", textColor: "text-blue-800",
                sections: [
                    { title: "Auto-anticorps de dépistage :", items: ["AAN (immunofluorescence sur HEp-2) : pattern et titre", "FR et ACPA (anti-CCP2) : suspicion polyarthrite rhumatoïde", "Anti-Scl70 et anti-centromère : sclérodermie systémique", "Anti-Ro52/Ro60, anti-La : syndrome de Sjögren, lupus"] },
                    { title: "Marqueurs inflammatoires :", items: ["VS, CRP, fibrinogène", "Électrophorèse des protéines sériques", "Complément C3, C4, CH50"] }
                ]
            },
            {
                id: 2,
                title: "ÉTAPE 2 : Orientation selon le pattern radiologique",
                borderColor: "border-teal-500", bgColor: "bg-teal-50", textColor: "text-teal-800",
                sections: [
                    { title: "Si pattern NSIP fibrosante :", items: ["Panel myosite étendu :\n- Anti-synthétases : Jo-1, PL-7, PL-12, OJ, EJ, KS\n- Anti-Mi-2α/β, anti-TIF1γ, anti-MDA5\n- Anti-SRP, anti-HMGCR\n- Anti-SAE1/2, anti-NXP2", "Panel sclérodermie :\n- Anti-RNA polymérase III\n- Anti-PM/Scl75-100\n- Anti-Ku, anti-Th/To\n- Anti-U1RNP, anti-U3RNP"] },
                    { title: "Si pattern UIP-like :", items: ["Recherche PR-PID :\n- ACPA haute affinité\n- FR IgA\n- Anti-peptides citrullinés étendus", "Recherche sclérodermie limitée :\n- Anti-centromère B\n- Capillaroscopie périunguéale"] }
                ]
            },
            {
                id: 3,
                title: "ÉTAPE 3 : Explorations complémentaires ciblées",
                borderColor: "border-indigo-500", bgColor: "bg-indigo-50", textColor: "text-indigo-800",
                sections: [
                    { title: "Si forte suspicion de connectivite sans AAN positifs :", items: ["Anti-Ro52 isolé : risque de PID progressive", "Anti-MDA5 : pneumopathie rapidement progressive", "Recherche d'anticorps rares : anti-PmScl, anti-Ku"] },
                    { title: "Marqueurs d'activité et pronostic :", items: ["Ferritine : suspicion de myosite à anti-MDA5", "Aldolase, CK, LDH : atteinte musculaire", "KL-6, SP-D : marqueurs de fibrose pulmonaire"] }
                ]
            }
        ],
        interpretation: {
            title: "Interprétation selon les présentations cliniques",
            borderColor: "border-purple-500", bgColor: "bg-purple-50", textColor: "text-purple-800",
            presentations: [
                { title: `"Sclérodermie-like"`, context: "Signes cliniques : Raynaud, sclérodactylie, télangiectasies", items: ["Bilan prioritaire :\n- Anti-Scl70 (haut risque PID sévère)\n- Anti-centromère (PID tardive mais HTAP)\n- Anti-RNA pol III (crise rénale)\n- Capillaroscopie (pattern sclérodermique)"] },
                { title: `"Syndrome anti-synthétase"`, context: "Triade : myosite + arthrite + PID", items: ["Bilan spécialisé :\n- Panel anti-synthétases complet\n- Recherche \"mains de mécanicien\"\n- CK, aldolase, EMG si myalgie"] },
                { title: `"PR-PID"`, context: "Contexte : homme, tabagique, nodules", items: ["Bilan spécifique :\n- ACPA + FR (double positivité = haut risque)\n- Recherche facteur rhumatoïde IgA\n- Évaluation articulaire clinique"] }
            ]
        },
        specialCases: {
            title: "Cas particuliers, pièges et urgences",
            borderColor: "border-amber-500", bgColor: "bg-amber-50", textColor: "text-amber-800",
            cases: [
                { title: "PID avec AAN négatifs (15-20% des cas)", items: ["Recherche anti-Ro52 isolé", "Répéter AAN à 6 mois", "Biopsie pulmonaire si diagnostic incertain"] },
                { title: "Chevauchements syndromiques", items: ["Scléromyosite : Anti-PM/Scl + anti-Ku", "Lupus-sclérodermie : Anti-U1RNP", "PR-sclérodermie : ACPA + anti-Scl70"] },
                { title: "Formes rapidement progressives", isUrgent: true, items: ["Bilan d'urgence (< 48h) :\n- Anti-MDA5 (myosite dermatomyosite)\n- Anti-RNA pol III (sclérodermie)\n- Complément consommé (lupus)\n- Ferritine > 1000 (syndrome d'activation macrophagique)"] }
            ]
        },
        followUp: {
            title: "Suivi biologique évolutif",
            borderColor: "border-green-500", bgColor: "bg-green-50", textColor: "text-green-800",
            sections: [
                { title: "Monitoring de l'activité (tous les 3 mois) :", items: ["Titre des auto-anticorps spécifiques", "CRP, VS (poussées inflammatoires)", "KL-6 (progression fibrotique)", "CPK si myosite associée"] },
                { title: "Surveillance thérapeutique :", items: ["Lymphocytes CD19+ si rituximab", "Bilan hépatique si méthotrexate", "Créatininémie si cyclophosphamide"] }
            ]
        }
    }
};