// Productos de ejemplo por categoría
const productosPorCategoria = {
    "medicamentos": [
        { "nombre": "Panadol 500mg", "descripcion": "Caja con 24 tabletas", "precio": "L45", "imagen": "imagenes/panadol.png",
        "indicaciones": "Alivio temporal del dolor de cabeza, dolor muscular, dolor de espalda, dolor de muelas, dolores menstruales, síntomas del resfriado común y fiebre.",
        "contraindicaciones": "Hipersensibilidad al paracetamol o a cualquiera de los componentes. No usar en caso de insuficiencia hepática grave.",
        "modo_uso": "Adultos y niños mayores de 12 años: 1 a 2 tabletas cada 4 a 6 horas según sea necesario. No exceder de 8 tabletas en 24 horas.",
        "precauciones": "Consultar a un médico antes de usar si tiene enfermedad hepática o renal. No usar con otros productos que contengan paracetamol. Evitar el consumo excesivo de alcohol.",
        "efectos_secundarios": "Raros: reacciones alérgicas (erupción cutánea, picazón), problemas hepáticos (uso prolongado o dosis altas).",
        "interacciones": "Anticoagulantes (warfarina), algunos medicamentos para la epilepsia, colestiramina."
        },
        { "nombre": "Panadol Niños Jarabe", "descripcion": "Frasco 120ml", "precio": "L60", "imagen": "imagenes/panadol_jarabe.png", "indicaciones": "Alivio temporal de la fiebre y el dolor en niños. Consultar dosis según el peso del niño.", "modo_uso": "Según indicación médica o las instrucciones del empaque para la edad y peso del niño." },
        { "nombre": "Panadol Mujer", "descripcion": "Caja con 20 tabletas", "precio": "L58", "imagen": "imagenes/panadol_mujer.png", "indicaciones": "Alivio de dolores menstruales, dolor de cabeza y síntomas del resfriado común.", "modo_uso": "Tomar 1 a 2 tabletas cada 4 a 6 horas. No exceder la dosis recomendada." },
        { "nombre": "Tempra Jarabe", "descripcion": "Frasco 60ml", "precio": "L150", "imagen": "imagenes/tempra_jarabe.png", "indicaciones": "Alivio de fiebre y dolor en niños. Consultar la dosis adecuada según la edad y peso.", "modo_uso": "Administrar oralmente según la dosis recomendada por el pediatra o las instrucciones del empaque." },
        { "nombre": "Dolex 500mg", "descripcion": "Caja con 20 tabletas", "precio": "L70", "imagen": "imagenes/dolex.png", "indicaciones": "Alivio de dolores de cabeza, musculares y fiebre.", "modo_uso": "Tomar 1 a 2 tabletas cada 4 a 6 horas según sea necesario." },
        { "nombre": "Ibuprofeno 200mg", "descripcion": "Caja con 12 tabletas", "precio": "L50", "imagen": "imagenes/ibuprofeno.jpg", "indicaciones": "Alivio del dolor, la inflamación y la fiebre.", "modo_uso": "Tomar 1 a 2 tabletas cada 4 a 6 horas con alimentos. No exceder la dosis recomendada." },
        { "nombre": "Ibuprofeno Jarabe", "descripcion": "Frasco 100ml", "precio": "L65", "imagen": "imagenes/ibuprofeno_jarabe.png", "indicaciones": "Alivio de fiebre y dolor en niños. Antiinflamatorio.", "modo_uso": "Consultar dosis según la edad y peso del niño o indicación médica." },
        { "nombre": "Amoxicilina 500mg", "descripcion": "Caja con 12 cápsulas", "precio": "L60", "imagen": "imagenes/amoxicilina.jpg", "indicaciones": "Antibiótico para tratar diversas infecciones bacterianas.", "modo_uso": "Tomar 1 cápsula cada 8 horas o según la prescripción médica. Completar el ciclo de tratamiento." },
        { "nombre": "Amoxicilina Suspensión", "descripcion": "Frasco 60ml", "precio": "L70", "imagen": "imagenes/amoxicilina_jarabe.png", "indicaciones": "Antibiótico para infecciones bacterianas en niños.", "modo_uso": "Administrar oralmente la dosis indicada por el médico. Agitar bien antes de usar." },
        { "nombre": "Loratadina 10mg", "descripcion": "Caja con 10 tabletas", "precio": "L25", "imagen": "imagenes/loratadina.png", "indicaciones": "Alivio de síntomas de alergias como estornudos, picazón y secreción nasal.", "modo_uso": "Tomar 1 tableta una vez al día. No causa somnolencia." },
        { "nombre": "Loratadina Jarabe", "descripcion": "Frasco 100ml", "precio": "L38", "imagen": "imagenes/loratadina_jarabe.png", "indicaciones": "Alivio de síntomas de alergias en niños.", "modo_uso": "Consultar dosis según la edad del niño o indicación médica." },
        { "nombre": "Ambroxol Jarabe", "descripcion": "Frasco 120ml", "precio": "L50", "imagen": "imagenes/ambroxol_jarabe.png", "indicaciones": "Expectorante y mucolítico para el alivio de la tos con flemas.", "modo_uso": "Tomar según la dosis indicada en el empaque o por el médico." },
        { "nombre": "Paracetamol 500mg", "descripcion": "Caja con 30 tabletas", "precio": "L65", "imagen": "imagenes/paracetamol.avif", "indicaciones": "Alivio del dolor y la fiebre.", "modo_uso": "Tomar 1 a 2 tabletas cada 4 a 6 horas según sea necesario." },
        { "nombre": "Diclofenaco 50mg", "descripcion": "Caja con 20 tabletas", "precio": "L68", "imagen": "imagenes/diclofenaco.png", "indicaciones": "Antiinflamatorio y analgésico para dolor e inflamación.", "modo_uso": "Tomar 1 tableta 2 a 3 veces al día con alimentos." },
        { "nombre": "Ranitidina 150mg", "descripcion": "Caja con 20 tabletas", "precio": "L70", "imagen": "imagenes/ranitidina.png", "indicaciones": "Alivio de acidez estomacal y reflujo ácido.", "modo_uso": "Tomar 1 tableta antes de las comidas o al acostarse." },
        { "nombre": "Metformina 850mg", "descripcion": "Caja con 30 tabletas", "precio": "L55", "imagen": "imagenes/metformina.jpg", "indicaciones": "Medicamento para el control de la diabetes tipo 2.", "modo_uso": "Tomar con las comidas, según la dosis y frecuencia indicada por el médico." },
        { "nombre": "Losartán 50mg", "descripcion": "Caja con 28 tabletas", "precio": "L70", "imagen": "imagenes/losartan.png", "indicaciones": "Tratamiento de la hipertensión arterial.", "modo_uso": "Tomar 1 tableta al día, con o sin alimentos, a la misma hora cada día." },
        { "nombre": "Aspirina 100mg", "descripcion": "Caja con 20 tabletas", "precio": "L60", "imagen": "imagenes/aspirina.jpg", "indicaciones": "Alivio del dolor leve a moderado, fiebre y antiagregante plaquetario.", "modo_uso": "Tomar 1 a 2 tabletas cada 4 a 6 horas según sea necesario. Consultar al médico para uso antiagregante." },
        { "nombre": "Omeprazol 20mg", "descripcion": "Caja con 14 cápsulas", "precio": "L70", "imagen": "imagenes/omeprazol.png", "indicaciones": "Alivio de acidez estomacal frecuente y úlceras.", "modo_uso": "Tomar 1 cápsula al día antes de una comida. No masticar ni triturar." }
    ],
    "cuidado": [
        { "nombre": "CeraVe Limpiador", "descripcion": "Botella 236ml", "precio": "L220", "imagen": "imagenes/limpiador.png", "indicaciones": "Limpieza suave para piel normal a seca.", "modo_uso": "Aplicar sobre la piel húmeda, masajear y enjuagar." },
        { "nombre": "Protector Solar Eucerin", "descripcion": "FPS 50, 50ml", "precio": "L180", "imagen": "imagenes/protector solar.jpeg", "indicaciones": "Protección solar alta para todo tipo de piel.", "modo_uso": "Aplicar generosamente 30 minutos antes de la exposición al sol y reaplicar cada 2 horas." },
        { "nombre": "Crema Nivea Soft", "descripcion": "Tarro 200ml", "precio": "L70", "imagen": "imagenes/nivea soft.jpg", "indicaciones": "Hidratación intensiva para rostro, cuerpo y manos.", "modo_uso": "Aplicar diariamente sobre la piel limpia y seca." },
        { "nombre": "Shampoo Head & Shoulders", "descripcion": "Botella 400ml", "precio": "L90", "imagen": "imagenes/shampoo.png", "indicaciones": "Control de la caspa y cuidado del cabello.", "modo_uso": "Aplicar sobre el cabello mojado, masajear y enjuagar. Usar regularmente." },
        { "nombre": "Desodorante Dove", "descripcion": "Spray 150ml", "precio": "L55", "imagen": "imagenes/desodorante.png", "indicaciones": "Protección antitranspirante y cuidado de la piel.", "modo_uso": "Aplicar sobre las axilas limpias y secas." },
        { "nombre": "Jabón Neutro", "descripcion": "Barra 100g", "precio": "L80", "imagen": "imagenes/jabon.png", "indicaciones": "Limpieza suave para piel sensible o irritada.", "modo_uso": "Usar diariamente para la higiene personal." },
        { "nombre": "Enjuague Bucal Listerine", "descripcion": "Botella 500ml", "precio": "L120", "imagen": "imagenes/listerine.png", "indicaciones": "Elimina gérmenes que causan mal aliento, placa y gingivitis.", "modo_uso": "Enjuagar con 20ml sin diluir durante 30 segundos, dos veces al día." },
        { "nombre": "Crema Pond's", "descripcion": "Tarro 100ml", "precio": "L50", "imagen": "imagenes/ponds.png", "indicaciones": "Hidratación facial y mejora de la luminosidad de la piel.", "modo_uso": "Aplicar en rostro y cuello limpios, por la mañana y noche." },
        { "nombre": "Gel Antibacterial", "descripcion": "Botella 250ml", "precio": "L35", "imagen": "imagenes/gel.png", "indicaciones": "Desinfección de manos sin agua ni jabón.", "modo_uso": "Aplicar una pequeña cantidad en las manos y frotar hasta secar." },
        { "nombre": "Cepillo Dental Oral-B", "descripcion": "Empaque con 2 piezas", "precio": "L40", "imagen": "imagenes/oralb.png", "indicaciones": "Limpieza efectiva de dientes y encías.", "modo_uso": "Cepillarse los dientes al menos dos veces al día durante dos minutos." },
        { "nombre": "Crema Eucerin Anti Manchas", "descripcion": "Tarro 250ml", "precio": "L180", "imagen": "imagenes/eucerin.png", "indicaciones": "Reduce manchas oscuras y unifica el tono de piel.", "modo_uso": "Aplicar diariamente en las áreas afectadas de la piel." },
        { "nombre": "Loción Nivea", "descripcion": "Botella 400ml", "precio": "L95", "imagen": "imagenes/locion_nivea.png", "indicaciones": "Hidratación profunda para piel seca.", "modo_uso": "Aplicar diariamente sobre todo el cuerpo después de la ducha." },
        { "nombre": "Toallas Femeninas Saba", "descripcion": "Toallas Nocturnas,Paquete con 10 piezas", "precio": "L45", "imagen": "imagenes/saba.png", "indicaciones": "Protección y comodidad durante el periodo menstrual, especialmente por la noche.", "modo_uso": "Usar una toalla por vez, cambiándola regularmente según sea necesario." },
        { "nombre": "Cotonetes Johnson", "descripcion": "Paquete con 200", "precio": "L30", "imagen": "imagenes/cotonetes.png", "indicaciones": "Limpieza delicada de oídos y aplicación de maquillaje.", "modo_uso": "Usar con cuidado, solo en la superficie externa del oído." },
        { "nombre": "Crema Dental Colgate", "descripcion": "Tubo 100ml", "precio": "L30", "imagen": "imagenes/colgate.png", "indicaciones": "Protección contra caries, fortalecimiento del esmalte y aliento fresco.", "modo_uso": "Cepillarse los dientes después de cada comida o al menos dos veces al día." },
        { "nombre": "Desmaquillante L'Oréal", "descripcion": "Botella 125ml", "precio": "L140", "imagen": "imagenes/desmaquillante.png", "indicaciones": "Elimina eficazmente el maquillaje, incluso el resistente al agua.", "modo_uso": "Aplicar sobre un algodón y pasar suavemente por rostro y ojos." },
        { "nombre": "Agua Micelar Garnier", "descripcion": "400ml, todo tipo de piel", "precio": "L190", "imagen": "imagenes/agua_micelar.png", "indicaciones": "Limpieza, desmaquillado y tonificación para todo tipo de piel, incluso sensible.", "modo_uso": "Aplicar con un algodón sobre rostro, ojos y labios. No necesita enjuague." },
        { "nombre": "Serum Facial Vitamina C", "descripcion": "30ml, antimanchas", "precio": "L280", "imagen": "imagenes/serum_vitc.png", "indicaciones": "Reduce manchas, ilumina y unifica el tono de piel.", "modo_uso": "Aplicar unas gotas sobre el rostro limpio y seco por la mañana, antes de la crema hidratante." },
        { "nombre": "Mascarilla Facial de Arcilla", "descripcion": "100g, purificante", "precio": "L70", "imagen": "imagenes/mascarilla_arcilla.png", "indicaciones": "Purifica, desintoxica y minimiza poros.", "modo_uso": "Aplicar una capa uniforme sobre el rostro limpio, dejar actuar 10-15 minutos y enjuagar. Usar 1-2 veces por semana." },
        { "nombre": "Exfoliante Corporal St. Ives", "descripcion": "283g, albaricoque", "precio": "L75", "imagen": "imagenes/stives_exfoliante.png", "indicaciones": "Exfolia suavemente para una piel suave y radiante.", "modo_uso": "Aplicar sobre la piel húmeda, masajear con movimientos circulares y enjuagar bien. Usar 3-4 veces por semana." },
        { "nombre": "Crema para Manos Neutrogena", "descripcion": "75ml, reparación intensa", "precio": "L60", "imagen": "imagenes/neutrogena_manos.png", "indicaciones": "Hidrata intensamente y repara manos secas y agrietadas.", "modo_uso": "Aplicar una pequeña cantidad en las manos tantas veces como sea necesario." },
        { "nombre": "Acondicionador Pantene", "descripcion": "400ml, hidratación extrema", "precio": "L140", "imagen": "imagenes/pantene_acondicionador.png", "indicaciones": "Hidratación profunda para cabello seco y dañado.", "modo_uso": "Aplicar sobre el cabello mojado después del shampoo, dejar actuar y enjuagar." },
        { "nombre": "Agua Micelar Bioderma Sensibio H2O", "descripcion": "250ml, limpiador calmante", "precio": "L280", "imagen": "imagenes/bioderma_agua.png", "indicaciones": "Limpieza y desmaquillado de pieles sensibles. Calma y descongestiona.", "modo_uso": "Impregnar un algodón y limpiar suavemente rostro y ojos. Sin enjuague." },
        { "nombre": "Crema reparadora Cicalfate Avène", "descripcion": "40ml, piel irritada", "precio": "L300", "imagen": "imagenes/avene_cicalfate.png", "indicaciones": "Repara y protege la piel irritada. Acelera la cicatrización.", "modo_uso": "Aplicar una o dos veces al día sobre la piel limpia y seca." },
        { "nombre": "Limpiador Facial CeraVe Espumoso", "descripcion": "236ml, piel normal a grasa", "precio": "L250", "imagen": "imagenes/cerave_espumoso.png", "indicaciones": "Limpia profundamente y remueve el exceso de grasa sin alterar la barrera cutánea.", "modo_uso": "Aplicar sobre la piel húmeda, masajear y enjuagar. Usar mañana y noche." },
        { "nombre": "Hidratante Facial Neutrogena Hydro Boost", "descripcion": "50g, gel de agua", "precio": "L380", "imagen": "imagenes/neutrogena_hydro.png", "indicaciones": "Hidratación intensa y refrescante para piel seca. Con ácido hialurónico.", "modo_uso": "Aplicar diariamente sobre rostro y cuello limpios." },
        { "nombre": "Corrector Antimanchas Eucerin Anti-Pigment", "descripcion": "30ml, con Thiamidol", "precio": "L550", "imagen": "imagenes/eucerin_anti_pigment.png", "indicaciones": "Reduce eficazmente las manchas oscuras y previene su reaparición.", "modo_uso": "Aplicar una pequeña cantidad directamente sobre las manchas una vez al día." },
        { "nombre": "Crema para Contorno de Ojos Olay Regenerist", "descripcion": "15ml, anti-edad", "precio": "L400", "imagen": "imagenes/olay_contorno.png", "indicaciones": "Reduce arrugas y líneas de expresión alrededor de los ojos. Hidrata y reafirma.", "modo_uso": "Aplicar una pequeña cantidad alrededor de los ojos por la mañana y noche." },
        { "nombre": "Tónico Facial Thayers Witch Hazel", "descripcion": "355ml, agua de rosas", "precio": "L190", "imagen": "imagenes/thayers_tonico.png", "indicaciones": "Limpia, tonifica e hidrata la piel. Reduce el tamaño de los poros.", "modo_uso": "Aplicar con un algodón sobre el rostro limpio. Usar mañana y noche." },
        { "nombre": "Bálsamo Labial La Roche-Posay Cicaplast", "descripcion": "7.5ml, reparador", "precio": "L120", "imagen": "imagenes/cicaplast_labios.png", "indicaciones": "Repara y protege los labios agrietados e irritados.", "modo_uso": "Aplicar sobre los labios tantas veces como sea necesario." }
    ],
    "vitaminas": [
        { "nombre": "Vitamina C 1000mg", "descripcion": "Frasco con 60 tabletas", "precio": "L90", "imagen": "imagenes/vitamina c.png",
        "beneficios": "Contribuye al funcionamiento normal del sistema inmunitario, reduce el cansancio y la fatiga, y ayuda a la formación de colágeno para la piel, huesos y cartílagos.",
        "dosis_recomendada": "Tomar 1 tableta al día con una comida o según indicación médica.",
        "ingredientes": "Ácido ascórbico (Vitamina C), celulosa microcristalina, estearato de magnesio.",
        "almacenamiento": "Conservar en un lugar fresco y seco, lejos de la luz directa. Mantener fuera del alcance de los niños.",
        "indicaciones": "Suplemento de vitamina C para fortalecer el sistema inmune.",
        "modo_uso": "Tomar 1 tableta al día con las comidas."},
        { "nombre": "Vitamina D3 10,000ui", "descripcion": "Frasco con 30 cápsulas", "precio": "L120", "imagen": "imagenes/vitamina d3.png", "indicaciones": "Suplemento de vitamina D para la salud ósea e inmune.", "modo_uso": "Tomar 1 cápsula al día con alimentos o según indicación médica." },
        { "nombre": "Multivitamínico Centrum", "descripcion": "Caja con 30 tabletas", "precio": "L150", "imagen": "imagenes/centrum.png", "indicaciones": "Aporte completo de vitaminas y minerales para el bienestar general.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Calcio + Vitamina D", "descripcion": "Frasco con 60 tabletas", "precio": "L110", "imagen": "imagenes/calcio.png", "indicaciones": "Fortalecimiento de huesos y dientes. Previene la osteoporosis.", "modo_uso": "Tomar 1 tableta dos veces al día con las comidas." },
        { "nombre": "Magnesio 500mg", "descripcion": "Frasco con 60 tabletas", "precio": "L195", "imagen": "imagenes/magnesio.png", "indicaciones": "Apoyo para la función muscular y nerviosa, y la salud ósea.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Hierro 100mg", "descripcion": "Frasco con 30 tabletas", "precio": "L180", "imagen": "imagenes/hierro.png", "indicaciones": "Prevención y tratamiento de la anemia ferropénica.", "modo_uso": "Tomar 1 tableta al día, preferiblemente con el estómago vacío o con vitamina C para mejorar la absorción." },
        { "nombre": "Omega 3", "descripcion": "Frasco con 60 cápsulas", "precio": "L130", "imagen": "imagenes/omega3.png", "indicaciones": "Apoyo a la salud cardiovascular, cerebral y ocular.", "modo_uso": "Tomar 1 a 2 cápsulas al día con las comidas." },
        { "nombre": "Zinc 50mg", "descripcion": "Frasco con 60 tabletas", "precio": "L85", "imagen": "imagenes/zinc.png", "indicaciones": "Apoyo al sistema inmune y la salud de la piel.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Vitamina B12", "descripcion": "Frasco con 30 tabletas", "precio": "L175", "imagen": "imagenes/b12.png", "indicaciones": "Esencial para la formación de glóbulos rojos y el funcionamiento del sistema nervioso.", "modo_uso": "Tomar 1 tableta al día o según indicación médica." },
        { "nombre": "Ácido Fólico", "descripcion": "Frasco con 60 tabletas", "precio": "L160", "imagen": "imagenes/folico.png", "indicaciones": "Importante para el desarrollo celular y la prevención de defectos del tubo neural en el embarazo.", "modo_uso": "Tomar 1 tableta al día o según indicación médica, especialmente durante el embarazo." },
        { "nombre": "Vitamina E 400UI", "descripcion": "Frasco con 60 cápsulas", "precio": "L110", "imagen": "imagenes/vitaminae.png", "indicaciones": "Antioxidante que protege las células del daño oxidativo.", "modo_uso": "Tomar 1 cápsula al día con las comidas." },
        { "nombre": "Vitamina A 5000UI", "descripcion": "Frasco con 60 cápsulas", "precio": "L195", "imagen": "imagenes/vitaminaa.png", "indicaciones": "Esencial para la visión, la función inmune y la salud de la piel.", "modo_uso": "Tomar 1 cápsula al día con las comidas o según indicación médica." },
        { "nombre": "Vitamina K2", "descripcion": "Frasco con 30 tabletas", "precio": "L120", "imagen": "imagenes/vitaminak.png", "indicaciones": "Apoya la salud ósea y cardiovascular.", "modo_uso": "Tomar 1 tableta al día con las comidas o según indicación médica." },
        { "nombre": "Vitamina B6", "descripcion": "Frasco con 60 tabletas", "precio": "L170", "imagen": "imagenes/vitaminab6.png", "indicaciones": "Esencial para el metabolismo de proteínas y el funcionamiento del sistema nervioso.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Vitamina B1", "descripcion": "Frasco con 60 tabletas", "precio": "L165", "imagen": "imagenes/vitaminab1.png", "indicaciones": "Esencial para el metabolismo de carbohidratos y la función nerviosa.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Vitamina B2", "descripcion": "Frasco con 60 tabletas", "precio": "L168", "imagen": "imagenes/vitaminab2.png", "indicaciones": "Importante para el crecimiento y la producción de energía.", "modo_uso": "Tomar 1 tableta al día con las comidas." },
        { "nombre": "Biotina 10000mcg", "descripcion": "Frasco con 60 cápsulas", "precio": "L115", "imagen": "imagenes/biotina.png", "indicaciones": "Apoya la salud del cabello, piel y uñas.", "modo_uso": "Tomar 1 cápsula al día con las comidas." },
        { "nombre": "CoQ10 100mg", "descripcion": "Frasco con 30 cápsulas", "precio": "L180", "imagen": "imagenes/coq10.png", "indicaciones": "Antioxidante que apoya la salud cardiovascular y la producción de energía.", "modo_uso": "Tomar 1 cápsula al día con las comidas." },
        { "nombre": "Probióticos", "descripcion": "Frasco con 30 cápsulas, 10 billones CFU", "precio": "L140", "imagen": "imagenes/probioticos.png", "indicaciones": "Apoya la salud digestiva e inmune.", "modo_uso": "Tomar 1 cápsula al día con el estómago vacío o según indicación médica." },
        { "nombre": "Colágeno Hidrolizado", "descripcion": "Frasco 300g, polvo", "precio": "L250", "imagen": "imagenes/colageno.png", "indicaciones": "Mejora la elasticidad de la piel, la salud de las articulaciones y los huesos.", "modo_uso": "Mezclar 1 cucharada en agua o bebida favorita. Tomar una vez al día." },
        { "nombre": "Glucosamina Condroitina", "descripcion": "Frasco con 90 tabletas", "precio": "L190", "imagen": "imagenes/glucosamina.png", "indicaciones": "Apoyo a la salud articular, reduce el dolor y mejora la movilidad.", "modo_uso": "Tomar 1 tableta dos veces al día con las comidas." },
        { "nombre": "Melatonina 5mg", "descripcion": "Frasco con 60 tabletas", "precio": "L180", "imagen": "imagenes/melatonina.png", "indicaciones": "Ayuda a regular el ciclo del sueño y a conciliar el sueño más fácilmente.", "modo_uso": "Tomar 1 tableta 30 minutos antes de acostarse." }
    ],
    "suministros": [
        { "nombre": "Termómetro Digital", "descripcion": "Termómetro clínico de alta precisión", "precio": "L120", "imagen": "imagenes/termometro.png", "indicaciones": "Medición rápida y precisa de la temperatura corporal.", "modo_uso": "Colocar la punta bajo la lengua o en la axila. Seguir instrucciones del fabricante." },
        { "nombre": "Tensiómetro", "descripcion": "Monitor de presión arterial automático", "precio": "L650", "imagen": "imagenes/tensiometro.png", "indicaciones": "Monitoreo de la presión arterial en casa.", "modo_uso": "Colocar el brazalete en el brazo y seguir las instrucciones para la medición. Usar a la misma hora cada día." },
        { "nombre": "Guantes de Látex", "descripcion": "Caja con 100 unidades", "precio": "L180", "imagen": "imagenes/guantes.png", "indicaciones": "Protección de manos para procedimientos médicos o limpieza general.", "modo_uso": "Colocar en las manos antes de manipular sustancias o realizar tareas que requieran higiene." },
        { "nombre": "Alcohol en Gel", "descripcion": "Botella 500ml", "precio": "L60", "imagen": "imagenes/alcoholgel.png", "indicaciones": "Desinfección de manos sin necesidad de agua.", "modo_uso": "Aplicar una cantidad suficiente en las manos y frotar hasta que seque completamente." },
        { "nombre": "Vendas Elásticas", "descripcion": "Paquete con 3 vendas", "precio": "L45", "imagen": "imagenes/vendas.png", "indicaciones": "Soporte para esguinces, torceduras o para fijar apósitos.", "modo_uso": "Aplicar con presión uniforme alrededor de la zona afectada, asegurando que no quede demasiado apretada." },
        { "nombre": "Cubrebocas KN95", "descripcion": "Paquete con 10 piezas", "precio": "L90", "imagen": "imagenes/cubrebocas.png", "indicaciones": "Protección respiratoria contra partículas y aerosoles.", "modo_uso": "Colocar sobre la boca y nariz, ajustando el clip nasal y las orejeras para un sellado adecuado." },
        { "nombre": "Silla de ruedas", "descripcion": "Silla plegable de aluminio", "precio": "L2500", "imagen": "imagenes/silla.png", "indicaciones": "Movilidad para personas con dificultad para caminar.", "modo_uso": "Usar según las necesidades de movilidad, asegurando los frenos al estar estacionado." },
        { "nombre": "Bastón", "descripcion": "Bastón de aluminio ajustable", "precio": "L220", "imagen": "imagenes/baston.png", "indicaciones": "Soporte y estabilidad al caminar.", "modo_uso": "Ajustar a la altura adecuada, usar en el lado opuesto a la pierna débil." },
        { "nombre": "Algodón", "descripcion": "Bolsa con 100g", "precio": "L55", "imagen": "imagenes/algodon.png", "indicaciones": "Limpieza de heridas, aplicación de medicamentos y uso cosmético.", "modo_uso": "Usar según necesidad, puede humedecerse con antiséptico." },
        { "nombre": "Jeringas punta Cateter", "descripcion": "Paquete con 25 jeringas", "precio": "L90", "imagen": "imagenes/jeringas.png", "indicaciones": "Uso médico para la administración de líquidos o toma de muestras.", "modo_uso": "Para uso exclusivo de profesionales de la salud, siguiendo las normas de asepsia." },
        { "nombre": "Tijeras de curación", "descripcion": "Acero inoxidable", "precio": "L55", "imagen": "imagenes/tijeras.png", "indicaciones": "Corte de gasas, vendas y otros materiales de curación.", "modo_uso": "Desinfectar antes de cada uso. No usar para otros fines." },
        { "nombre": "Cinta Micropore", "descripcion": "Rollo 1.5cm x 5m", "precio": "L30", "imagen": "imagenes/micropore.png", "indicaciones": "Fijación de apósitos y vendajes en pieles sensibles.", "modo_uso": "Aplicar sobre la piel limpia y seca para asegurar el apósito." },
        { "nombre": "Bata médica", "descripcion": "Talla M", "precio": "L140", "imagen": "imagenes/bata.png", "indicaciones": "Protección personal en entornos médicos o de laboratorio.", "modo_uso": "Usar sobre la ropa para protegerse de salpicaduras y mantener la higiene." },
        { "nombre": "Estetoscopio", "descripcion": "Clásico, doble campana", "precio": "L320", "imagen": "imagenes/estetoscopio.png", "indicaciones": "Auscultación de sonidos corporales (corazón, pulmones, etc.).", "modo_uso": "Para uso de profesionales de la salud en el diagnóstico. Limpiar regularmente." },
        { "nombre": "Bolsa para agua caliente", "descripcion": "2 litros", "precio": "L60", "imagen": "imagenes/bolsa_agua.png", "indicaciones": "Alivio de dolores musculares, cólicos o para mantener el calor.", "modo_uso": "Llenar con agua caliente (no hirviendo) y colocar sobre la zona afectada." },
        { "nombre": "Cubre zapatos", "descripcion": "Paquete con 10", "precio": "L40", "imagen": "imagenes/cubre_zapatos.png", "indicaciones": "Protección de zapatos y mantenimiento de la higiene en áreas limpias.", "modo_uso": "Colocar sobre los zapatos al entrar en zonas que requieran control de higiene." },
        { "nombre": "Nebulizador Portátil", "descripcion": "Compacto y silencioso", "precio": "L450", "imagen": "imagenes/nebulizador.png", "indicaciones": "Administración de medicamentos líquidos en forma de aerosol para afecciones respiratorias.", "modo_uso": "Llenar con el medicamento indicado y seguir las instrucciones del dispositivo para nebulizar." },
        { "nombre": "Oxímetro de Pulso", "descripcion": "Medidor de saturación de oxígeno", "precio": "L300", "imagen": "imagenes/oximetro.png", "indicaciones": "Monitoreo no invasivo de la saturación de oxígeno en la sangre y la frecuencia del pulso.", "modo_uso": "Colocar en un dedo limpio y seco. Leer los valores en la pantalla." },
        { "nombre": "Botiquín de Primeros Auxilios", "descripcion": "Completo, para el hogar o auto", "precio": "L280", "imagen": "imagenes/botiquin.png", "indicaciones": "Contiene elementos esenciales para el tratamiento de lesiones menores y emergencias.", "modo_uso": "Consultar un manual de primeros auxilios para el uso adecuado de cada elemento." },
        { "nombre": "Alcohol Isopropílico", "descripcion": "Botella 500ml, 70%", "precio": "L80", "imagen": "imagenes/alcohol_isopropilico.png", "indicaciones": "Antiséptico para desinfectar piel y superficies.", "modo_uso": "Aplicar sobre la piel o superficie a desinfectar con un algodón. No ingerir." },
        { "nombre": "Mascarillas Quirúrgicas", "descripcion": "Caja con 50 unidades", "precio": "L110", "imagen": "imagenes/mascarillas_quirurgicas.png", "indicaciones": "Protección personal para prevenir la propagación de gotas respiratorias.", "modo_uso": "Colocar sobre la boca y nariz, asegurando que cubra bien. Desechar después de cada uso." },
        { "nombre": "Compresas Frías/Calientes", "descripcion": "Reutilizables, gel", "precio": "L50", "imagen": "imagenes/compresas.png", "indicaciones": "Alivio de dolor, inflamación (frío) o relajación muscular (calor).", "modo_uso": "Enfriar en el congelador para uso frío o calentar en microondas/agua caliente para uso caliente. Aplicar sobre la zona afectada." }
    ],
    "maternidad": [
        { "nombre": "Pañales Huggies Etapa 1", "descripcion": "Paquete con 40 pañales", "precio": "L220", "imagen": "imagenes/huggies.png", "indicaciones": "Absorción y protección para bebés de 3-6 kg.", "modo_uso": "Cambiar el pañal cuando esté mojado o sucio, asegurando un ajuste cómodo y sin fugas." },
        { "nombre": "Toallitas Húmedas", "descripcion": "Paquete con 80 toallitas", "precio": "L55", "imagen": "imagenes/toallitas.png", "indicaciones": "Limpieza suave de la piel del bebé durante el cambio de pañal o para limpieza rápida.", "modo_uso": "Usar una o más toallitas para limpiar la piel del bebé. Desechar en la basura (no en el inodoro)." },
        { "nombre": "Biberón Avent", "descripcion": "Biberón anticólicos 260ml", "precio": "L110", "imagen": "imagenes/biberon.png", "indicaciones": "Alimentación con fórmula o leche materna, diseñado para reducir cólicos.", "modo_uso": "Esterilizar antes de cada uso. Llenar con la cantidad deseada de líquido y alimentar al bebé." },
        { "nombre": "Crema para Pezones", "descripcion": "Alivio para la lactancia", "precio": "L75", "imagen": "imagenes/crema_pezones.png", "indicaciones": "Alivio y protección para pezones agrietados o doloridos durante la lactancia.", "modo_uso": "Aplicar una pequeña cantidad después de cada toma o según necesidad. No es necesario retirar antes de amamantar." },
        { "nombre": "Cuna portátil", "descripcion": "Cuna plegable y fácil de transportar", "precio": "L850", "imagen": "imagenes/cuna.png", "indicaciones": "Un lugar seguro y cómodo para que el bebé duerma o descanse en casa o de viaje.", "modo_uso": "Armar y desarmar siguiendo las instrucciones del fabricante. Asegurar siempre los sistemas de seguridad." },
        { "nombre": "Extractor de Leche", "descripcion": "Manual, fácil de usar", "precio": "L250", "imagen": "imagenes/extractor.png", "indicaciones": "Extracción manual de leche materna para almacenamiento o alimentación.", "modo_uso": "Esterilizar antes de usar. Colocar correctamente sobre el seno y accionar el mecanismo para extraer la leche." },
        { "nombre": "Chupón", "descripcion": "Chupón ortodóntico", "precio": "L35", "imagen": "imagenes/chupon.png", "indicaciones": "Ayuda a calmar al bebé y satisface el reflejo de succión.", "modo_uso": "Esterilizar antes del primer uso. Limpiar regularmente. Reemplazar si muestra signos de desgaste." },
        { "nombre": "Silla para auto", "descripcion": "Silla de seguridad para bebé", "precio": "L1200", "imagen": "imagenes/sillaauto.png", "indicaciones": "Transporte seguro de bebés en vehículos, conforme a normativas de seguridad.", "modo_uso": "Instalar en el asiento trasero del vehículo siguiendo las instrucciones del fabricante. Asegurar al bebé correctamente." },
        { "nombre": "Monitor de bebé", "descripcion": "Monitor de audio y video", "precio": "L1800", "imagen": "imagenes/monitor.png", "indicaciones": "Monitoreo del bebé a distancia, con audio y video para mayor tranquilidad.", "modo_uso": "Colocar la unidad del bebé en la habitación del bebé y la unidad parental cerca de los padres. Seguir instrucciones para el emparejamiento." },
        { "nombre": "Almohada de lactancia", "descripcion": "Almohada ergonómica", "precio": "L320", "imagen": "imagenes/almohada.png", "indicaciones": "Soporte cómodo para la madre y el bebé durante la lactancia.", "modo_uso": "Colocar alrededor de la cintura para apoyar al bebé a la altura adecuada del pecho." },
        { "nombre": "Biberón Dr. Brown's", "descripcion": "Biberón anticólicos 250ml", "precio": "L170", "imagen": "imagenes/biberon_dr.png", "indicaciones": "Alimentación de bebés, diseñado para reducir cólicos y gases.", "modo_uso": "Esterilizar antes de cada uso. Armar las piezas internas según las instrucciones del fabricante." },
        { "nombre": "Cochecito de bebé", "descripcion": "Plegable, ligero", "precio": "L1800", "imagen": "imagenes/cochecito.png", "indicaciones": "Transporte cómodo y seguro del bebé.", "modo_uso": "Abrir y plegar siguiendo las instrucciones. Asegurar al bebé con el arnés de seguridad." },
        { "nombre": "Toalla para bebé", "descripcion": "Algodón, 80x80cm", "precio": "L90", "imagen": "imagenes/toalla_bebe.png", "indicaciones": "Secado suave y delicado de la piel del bebé después del baño.", "modo_uso": "Secar al bebé con toques suaves después del baño." },
        { "nombre": "Cambiador portátil", "descripcion": "Impermeable", "precio": "L190", "imagen": "imagenes/cambiador.png", "indicaciones": "Superficie limpia e impermeable para cambiar pañales fuera de casa.", "modo_uso": "Extender sobre una superficie plana para cambiar al bebé. Limpiar después de cada uso." },
        { "nombre": "Juguete mordedera", "descripcion": "Silicón, colores surtidos", "precio": "L55", "imagen": "imagenes/mordedera.png", "indicaciones": "Alivia las molestias de la dentición en bebés. Estimula las encías.", "modo_uso": "Lavar antes del primer uso. Puede enfriarse en la nevera para un mayor alivio." },
        { "nombre": "Set de cuidado para bebé", "descripcion": "Cepillo, peine, tijeras, cortauñas, termometro pinzas", "precio": "L250", "imagen": "imagenes/set_cuidado.png", "indicaciones": "Herramientas esenciales para el cuidado diario e higiene del bebé.", "modo_uso": "Usar cada herramienta según su función específica con cuidado. Limpiar después de cada uso." },
        { "nombre": "Fórmula Infantil Enfamil", "descripcion": "Lata 400g, etapa 1", "precio": "L320", "imagen": "imagenes/enfamil.png", "indicaciones": "Nutrición completa para bebés de 0 a 6 meses si la lactancia materna no es posible o es insuficiente.", "modo_uso": "Preparar siguiendo las instrucciones del empaque con agua hervida y enfriada. Administrar según la edad y apetito del bebé." },
        { "nombre": "Crema para Rozaduras Desitin", "descripcion": "113g, alivio rápido", "precio": "L90", "imagen": "imagenes/desitin.png", "indicaciones": "Prevención y tratamiento de rozaduras del pañal.", "modo_uso": "Aplicar una capa gruesa sobre la piel limpia y seca del bebé en cada cambio de pañal." },
        { "nombre": "Calentador de Biberones Philips Avent", "descripcion": "Calentamiento rápido y uniforme", "precio": "L450", "imagen": "imagenes/calentador_biberones.png", "indicaciones": "Calentamiento rápido y seguro de biberones y potitos.", "modo_uso": "Colocar el biberón/potito en el calentador con agua y seleccionar el ajuste deseado. Seguir las instrucciones del fabricante." },
        { "nombre": "Esterilizador de Biberones Dr. Brown's", "descripcion": "Para microondas", "precio": "L1,200", "imagen": "imagenes/esterilizador.png", "indicaciones": "Esterilización rápida de biberones y accesorios en el microondas.", "modo_uso": "Colocar los biberones y accesorios en el esterilizador con agua, cerrar y calentar en el microondas según las instrucciones." },
        { "nombre": "Baberos de Silicona", "descripcion": "Paquete con 3, fáciles de limpiar", "precio": "L100", "imagen": "imagenes/baberos.png", "indicaciones": "Protección de la ropa del bebé durante las comidas.", "modo_uso": "Colocar alrededor del cuello del bebé. Limpiar fácilmente con agua y jabón." },
        { "nombre": "Mochila Pañalera Skip Hop", "descripcion": "Amplia, múltiples compartimentos", "precio": "L750", "imagen": "imagenes/mochila_panalera.png", "indicaciones": "Organización y transporte de artículos de bebé (pañales, biberones, ropa, etc.).", "modo_uso": "Usar para llevar todo lo necesario para el bebé. Mantener organizada con los compartimentos." }
    ],
    "dermocosmeticos": [
        { "nombre": "Gel limpiador La Roche-Posay", "descripcion": "200ml, piel sensible", "precio": "L350", "imagen": "imagenes/laroche_gel.png", "indicaciones": "Limpieza suave para pieles sensibles y mixtas a grasas.", "modo_uso": "Aplicar sobre el rostro húmedo, masajear y enjuagar. Usar mañana y noche." },
        { "nombre": "Crema hidratante Cetaphil", "descripcion": "473ml, rostro y cuerpo", "precio": "L420", "imagen": "imagenes/cetaphil.png", "indicaciones": "Hidratación profunda y duradera para pieles secas y sensibles.", "modo_uso": "Aplicar generosamente sobre la piel limpia y seca, tantas veces como sea necesario." },
        { "nombre": "Protector solar ISDIN Fusion Water", "descripcion": "SPF 50, 50ml, toque seco", "precio": "L600", "imagen": "imagenes/isdin_solar.png", "indicaciones": "Alta protección solar facial, ideal para uso diario y pieles sensibles.", "modo_uso": "Aplicar generosamente sobre la piel seca o mojada, media hora antes de la exposición solar." },
        { "nombre": "Sérum anti-edad L'Oréal Revitalift", "descripcion": "30ml, con Ácido Hialurónico", "precio": "L480", "imagen": "imagenes/loreal_serum.png", "indicaciones": "Reduce arrugas, hidrata intensamente y mejora la elasticidad de la piel.", "modo_uso": "Aplicar 2-3 gotas en rostro y cuello limpios, mañana y noche, antes de la crema hidratante." },
        { "nombre": "Agua Micelar Bioderma Sensibio H2O", "descripcion": "250ml, limpiador calmante", "precio": "L280", "imagen": "imagenes/bioderma_agua.png", "indicaciones": "Limpieza y desmaquillado de pieles sensibles. Calma y descongestiona.", "modo_uso": "Impregnar un algodón y limpiar suavemente rostro y ojos. Sin enjuague." },
        { "nombre": "Crema reparadora Cicalfate Avène", "descripcion": "40ml, piel irritada", "precio": "L300", "imagen": "imagenes/avene_cicalfate.png", "indicaciones": "Repara y protege la piel irritada. Acelera la cicatrización.", "modo_uso": "Aplicar una o dos veces al día sobre la piel limpia y seca." },
        { "nombre": "Limpiador Facial CeraVe Espumoso", "descripcion": "236ml, piel normal a grasa", "precio": "L250", "imagen": "imagenes/cerave_espumoso.png", "indicaciones": "Limpia profundamente y remueve el exceso de grasa sin alterar la barrera cutánea.", "modo_uso": "Aplicar sobre la piel húmeda, masajear y enjuagar. Usar mañana y noche." },
        { "nombre": "Hidratante Facial Neutrogena Hydro Boost", "descripcion": "50g, gel de agua", "precio": "L380", "imagen": "imagenes/neutrogena_hydro.png", "indicaciones": "Hidratación intensa y refrescante para piel seca. Con ácido hialurónico.", "modo_uso": "Aplicar diariamente sobre rostro y cuello limpios." },
        { "nombre": "Corrector Antimanchas Eucerin Anti-Pigment", "descripcion": "30ml, con Thiamidol", "precio": "L550", "imagen": "imagenes/eucerin_anti_pigment.png", "indicaciones": "Reduce eficazmente las manchas oscuras y previene su reaparición.", "modo_uso": "Aplicar una pequeña cantidad directamente sobre las manchas una vez al día." },
        { "nombre": "Crema para Contorno de Ojos Olay Regenerist", "descripcion": "15ml, anti-edad", "precio": "L400", "imagen": "imagenes/olay_contorno.png", "indicaciones": "Reduce arrugas y líneas de expresión alrededor de los ojos. Hidrata y reafirma.", "modo_uso": "Aplicar una pequeña cantidad alrededor de los ojos por la mañana y noche." },
        { "nombre": "Tónico Facial Thayers Witch Hazel", "descripcion": "355ml, agua de rosas", "precio": "L190", "imagen": "imagenes/thayers_tonico.png", "indicaciones": "Limpia, tonifica e hidrata la piel. Reduce el tamaño de los poros.", "modo_uso": "Aplicar con un algodón sobre el rostro limpio. Usar mañana y noche." },
        { "nombre": "Bálsamo Labial La Roche-Posay Cicaplast", "descripcion": "7.5ml, reparador", "precio": "L120", "imagen": "imagenes/cicaplast_labios.png", "indicaciones": "Repara y protege los labios agrietados e irritados.", "modo_uso": "Aplicar sobre los labios tantas veces como sea necesario." }
    ]
};

// --- Resaltado de tarjeta seleccionada ---
let tarjetaSeleccionada = null;

function activarTarjeta(card) {
    if (tarjetaSeleccionada) {
        tarjetaSeleccionada.classList.remove('active-product-card');
    }
    tarjetaSeleccionada = card;
    tarjetaSeleccionada.classList.add('active-product-card');
}

// Función para inicializar los event listeners de las tarjetas de categoría de productos
function inicializarEventosTarjetas() {
    const productCards = document.querySelectorAll('.producto-card');
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            const categoria = this.dataset.categoria;
            mostrarProductosCategoria(categoria);
            activarTarjeta(this);
            // Desplazamiento suave a la sección de productos-lista
            document.getElementById('productos-lista').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Función para mostrar productos de una categoría específica
function mostrarProductosCategoria(categoria) {
    const productosLista = document.getElementById('productos-lista');
    productosLista.innerHTML = ''; // Limpiar la lista antes de mostrar los nuevos productos

    const productos = productosPorCategoria[categoria];

    if (productos && productos.length > 0) {
        // Crear contenedor de fila
        const row = document.createElement('div');
        row.classList.add('row');
        productosLista.appendChild(row);

        productos.forEach(prod => {
            const col = document.createElement('div');
            col.classList.add('col-md-3', 'mb-4', 'producto-item');
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">${prod.descripcion}</p>
                        <p class="card-text fw-bold">Precio: ${prod.precio}</p>
                        <button class="btn btn-success btn-sm agregar-carrito-btn" data-nombre="${prod.nombre}">Agregar al Carrito</button>
                        <button class="btn btn-info btn-sm ms-2 info-producto-btn" data-nombre="${prod.nombre}">Más Info</button>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        // Asignar eventos de clic a los botones "Agregar al Carrito" y "Más Info"
        document.querySelectorAll('.agregar-carrito-btn').forEach(button => {
            button.addEventListener('click', function () {
                const nombreProducto = this.dataset.nombre;
                const producto = productos.find(p => p.nombre === nombreProducto);
                if (producto) {
                    agregarAlCarrito(producto);
                }
            });
        });

        delegarEventoInfoProducto(); // Delegar el evento para los botones "Más Info"

    } else {
        productosLista.innerHTML = '<p class="text-center">No hay productos disponibles en esta categoría.</p>';
    }
}

// Función para buscar productos
document.querySelector('.fah-search-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const query = document.querySelector('.fah-search-input').value.toLowerCase();
    const resultados = [];

    for (const categoria in productosPorCategoria) {
        productosPorCategoria[categoria].forEach(prod => {
            if (prod.nombre.toLowerCase().includes(query) || prod.descripcion.toLowerCase().includes(query)) {
                resultados.push(prod);
            }
        });
    }
    mostrarResultadosBusqueda(resultados, query);
    // Desplazamiento suave a la sección de productos-lista
    document.getElementById('productos-lista').scrollIntoView({
        behavior: 'smooth'
    });
});

// Función para mostrar resultados de búsqueda
function mostrarResultadosBusqueda(resultados, query) {
    const productosLista = document.getElementById('productos-lista');
    productosLista.innerHTML = '';

    if (resultados.length > 0) {
        const searchTitle = document.createElement('h3');
        searchTitle.classList.add('text-center', 'mb-4');
        searchTitle.innerText = `Resultados de búsqueda para "${query}":`;
        productosLista.appendChild(searchTitle);

        // Crear contenedor de fila
        const row = document.createElement('div');
        row.classList.add('row');
        productosLista.appendChild(row);

        resultados.forEach(prod => {
            const col = document.createElement('div');
            col.classList.add('col-md-3', 'mb-4', 'producto-item');
            col.innerHTML = `
                <div class="card h-100">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">${prod.descripcion}</p>
                        <p class="card-text fw-bold">Precio: ${prod.precio}</p>
                        <button class="btn btn-success btn-sm agregar-carrito-btn" data-nombre="${prod.nombre}">Agregar al Carrito</button>
                        <button class="btn btn-info btn-sm ms-2 info-producto-btn" data-nombre="${prod.nombre}">Más Info</button>
                    </div>
                </div>
            `;
            row.appendChild(col);
        });

        // Asignar eventos de clic a los botones "Agregar al Carrito" y "Más Info"
        document.querySelectorAll('.agregar-carrito-btn').forEach(button => {
            button.addEventListener('click', function () {
                const nombreProducto = this.dataset.nombre;
                const producto = productosPorCategoria[Object.keys(productosPorCategoria).find(cat =>
                    productosPorCategoria[cat].some(p => p.nombre === nombreProducto)
                )].find(p => p.nombre === nombreProducto);
                if (producto) {
                    agregarAlCarrito(producto);
                }
            });
        });
        delegarEventoInfoProducto(); // Delegar el evento para los botones "Más Info"

    } else {
        productosLista.innerHTML = '<p class="text-center">No se encontraron resultados para su búsqueda.</p>';
    }
}

// Función para mostrar la información detallada del producto en el modal
function mostrarInfoProducto(prod) {
    const productoInfoBody = document.getElementById('producto-info-body');
    productoInfoBody.innerHTML = ''; // Limpiar el contenido anterior

    let infoHtml = `
        <div class="row">
            <div class="col-md-5">
                <img src="${prod.imagen}" class="img-fluid rounded" alt="${prod.nombre}">
            </div>
            <div class="col-md-7">
                <h3>${prod.nombre}</h3>
                <p class="lead">${prod.descripcion}</p>
                <p class="fw-bold">Precio: ${prod.precio}</p>
    `;

    if (prod.indicaciones) {
        infoHtml += `<h4>Indicaciones:</h4><p>${prod.indicaciones}</p>`;
    }
    if (prod.modo_uso) {
        infoHtml += `<h4>Modo de Uso:</h4><p>${prod.modo_uso}</p>`;
    }
    // Cierre del div col-md-7 y div row
    infoHtml += `
            </div>
        </div>
    `;

    productoInfoBody.innerHTML = infoHtml;
    const productoInfoModal = new bootstrap.Modal(document.getElementById('productoInfoModal'));
    productoInfoModal.show();
}

// Delegar evento de clic para los botones "Más Info"
function delegarEventoInfoProducto() {
    document.querySelectorAll('.info-producto-btn').forEach(button => {
        button.addEventListener('click', function () {
            const nombreProducto = this.dataset.nombre;
            let productoEncontrado = null;
            for (const categoria in productosPorCategoria) {
                productoEncontrado = productosPorCategoria[categoria].find(p => p.nombre === nombreProducto);
                if (productoEncontrado) {
                    break;
                }
            }
            if (productoEncontrado) {
                mostrarInfoProducto(productoEncontrado);
            }
        });
    });
}

// Inicializar eventos al cargar el DOM para que las tarjetas de categoría sean interactivas
document.addEventListener('DOMContentLoaded', inicializarEventosTarjetas);

// Mostrar medicamentos por defecto al cargar la página de productos
document.addEventListener('DOMContentLoaded', () => {
    // Si estamos en la página de productos, mostramos medicamentos por defecto
    const productosSection = document.getElementById('productos');
    if (productosSection) {
        mostrarProductosCategoria('medicamentos');
        // Activar la tarjeta de medicamentos por defecto
        const tarjetaMedicamentos = document.querySelector('.producto-card[data-categoria="medicamentos"]');
        if (tarjetaMedicamentos) {
            activarTarjeta(tarjetaMedicamentos);
        }
    }
});