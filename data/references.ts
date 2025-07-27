export interface Reference {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  urls: string[];
}

export const references: Reference[] = [
  // 2025
  {
    id: 'larici2025',
    title: 'ESR Essentials: imaging in fibrotic lung diseases-practice recommendations by the European Society of Thoracic Imaging.',
    authors: 'Larici AR, Biederer J, Cicchetti G, et al.',
    journal: 'Eur Radiol',
    year: 2025,
    volume: '35',
    pages: '2245',
    urls: ['https://link.springer.com/article/10.1007/s00330-024-11054-2']
  },
  {
    id: 'liu2025',
    title: 'Advances in idiopathic pulmonary fibrosis diagnosis and treatment.',
    authors: 'Liu H, Shen J, He C.',
    journal: 'Chin Med J Pulm Crit Care Med',
    year: 2025,
    volume: '3',
    pages: '12-21',
    urls: ['https://www.sciencedirect.com/science/article/pii/S2772558825000052']
  },
  // 2024
  {
    id: 'raghu2024',
    title: 'Moving forward in IPF: lessons learned from clinical trials.',
    authors: 'Raghu G, Fleming TR.',
    journal: 'Lancet Respir Med',
    year: 2024,
    volume: '12',
    pages: '583',
    urls: ['https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(24)00177-2/abstract']
  },
  {
    id: 'luo2024',
    title: 'Acute exacerbation of idiopathic pulmonary fibrosis a narrative review primary focus on treatments.',
    authors: 'Luo X, Xiang F.',
    journal: 'J Thorac Dis',
    year: 2024,
    volume: '16(7)',
    pages: '4727-4741',
    urls: ['https://jtd.amegroups.org/article/view/88138/html']
  },
  {
    id: 'hoppner2024',
    title: 'Progressive pulmonary fibrosis in patients with connective tissue disease-associated interstitial lung disease: An explorative study.',
    authors: 'Höppner J, Wollsching-Strobel M, Schumacher F, et al.',
    journal: 'Arch Rheumatol',
    year: 2024,
    volume: '39(1)',
    pages: '46-51',
    urls: ['https://archivesofrheumatology.org/full-text/1555']
  },
  // 2023
  {
    id: 'patel2023ila',
    title: 'Interstitial lung abnormalities: do symptoms matter?',
    authors: 'Patel AS.',
    journal: 'ERJ Open Res',
    year: 2023,
    volume: '9',
    pages: '00502-2023',
    urls: ['https://publications.ersnet.org/content/erjor/9/5/00502-2023']
  },
  {
    id: 'shakeel2023',
    title: 'Idiopathic pulmonary fibrosis: Pathophysiology, cellular signaling, diagnostic and therapeutic approaches.',
    authors: 'Shakeel I, Afzal M, Islam A, et al.',
    journal: 'Med Drug Discov',
    year: 2023,
    volume: '20',
    pages: '100167',
    urls: ['https://www.sciencedirect.com/science/article/pii/S2590098623000179']
  },
  {
    id: 'nayfeh2023',
    title: 'Nonspecific Interstitial Pneumonia.',
    authors: 'Nayfeh AS, Chippa V, Moore DR.',
    journal: 'StatPearls [Internet].',
    year: 2023,
    urls: ['https://www.ncbi.nlm.nih.gov/books/NBK518974/']
  },
  {
    id: 'acr2023screening',
    title: 'ACR Guideline for the Screening and Monitoring of Interstitial Lung Disease in People With Systemic Autoimmune Rheumatic Diseases.',
    authors: 'American College of Rheumatology',
    journal: 'Arthritis Rheumatol.',
    year: 2023,
    volume: '75(8)',
    pages: '1321-1339',
    urls: ['https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/art.42860']
  },
  {
    id: 'acr2023treatment',
    title: 'American College of Rheumatology (ACR) Guideline for the Treatment of Interstitial Lung Disease in People with Systemic Autoimmune Rheumatic Disease.',
    authors: 'American College of Rheumatology',
    journal: 'Arthritis & Rheumatology and Arthritis Care and Research.',
    year: 2023,
    urls: ['https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/art.42861']
  },
  {
    id: 'tao2023',
    title: 'Mediators of the association between gastro-oesophageal reflux disease and idiopathic pulmonary fibrosis.',
    authors: 'Tao H, Dong Y, Chen X, Peng L.',
    journal: 'Eur Respir J',
    year: 2023,
    volume: '62',
    urls: ['https://publications.ersnet.org/content/erj/62/6/2300323']
  },
  // 2022
  {
    id: 'kheir2022',
    title: 'Transbronchial Lung Cryobiopsy in Patients with Interstitial Lung Disease: A Systematic Review.',
    authors: 'Kheir F, Uribe Becerra JP, Bissell B, et al.',
    journal: 'Ann Am Thorac Soc',
    year: 2022,
    volume: '19',
    pages: '1193',
    urls: ['https://www.atsjournals.org/doi/10.1513/AnnalsATS.202102-198OC']
  },
  {
    id: 'moss2022',
    title: 'Pathogenic Mechanisms Underlying Idiopathic Pulmonary Fibrosis.',
    authors: 'Moss BJ, Ryter SW, Rosas IO.',
    journal: 'Annu Rev Pathol.',
    year: 2022,
    volume: '17',
    pages: '515-546',
    urls: ['https://pubmed.ncbi.nlm.nih.gov/34813355/']
  },
  {
    id: 'raghu2022',
    title: 'Idiopathic Pulmonary Fibrosis (an Update) and Progressive Pulmonary Fibrosis in Adults: An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline.',
    authors: 'Raghu G, Remy-Jardin M, Richeldi L, et al.',
    journal: 'Am J Respir Crit Care Med.',
    year: 2022,
    volume: '205(9)',
    pages: 'e18-e47',
    urls: ['https://pmc.ncbi.nlm.nih.gov/articles/PMC9851481/']
  },
  {
    id: 'hamblin2022',
    title: 'Diagnosis, course and management of hypersensitivity pneumonitis.',
    authors: 'Hamblin M, Prosch H, Vašáková M.',
    journal: 'Eur Respir Rev',
    year: 2022,
    volume: '31',
    pages: '210169',
    urls: ['https://publications.ersnet.org/content/errev/31/163/210169']
  },
  {
    id: 'korevaar2022',
    title: 'European Respiratory Society guidelines on transbronchial lung cryobiopsy in the diagnosis of interstitial lung diseases.',
    authors: 'Korevaar DA, Colella S, Fally M, et al.',
    journal: 'Eur Respir J',
    year: 2022,
    volume: '60',
    pages: '2200425',
    urls: ['https://publications.ersnet.org/content/erj/60/5/2200425']
  },
  // 2021
  {
    id: 'chae2021ila',
    title: 'Interstitial Lung Abnormalities: What Radiologists Should Know',
    authors: 'Chae KJ, Jin GY, Goo JM, Chung MJ.',
    journal: 'Korean J Radiol',
    year: 2021,
    volume: '22(3)',
    pages: '454-463',
    urls: ['https://kjronline.org/DOIx.php?id=10.3348/kjr.2020.0191']
  },
  {
    id: 'spagnolo2021',
    title: 'Mechanisms of progressive fibrosis in connective tissue disease (CTD)-associated interstitial lung diseases (ILDs).',
    authors: 'Spagnolo P, Distler O, Ryerson CJ, et al.',
    journal: 'Ann Rheum Dis',
    year: 2021,
    volume: '80',
    pages: '143-150',
    urls: ['https://ard.bmj.com/content/80/2/143']
  },
  {
    id: 'hino2021',
    title: 'Spectrum of Pulmonary Fibrosis from Interstitial Lung Abnormality to Usual Interstitial Pneumonia: Importance of Identification and Quantification of Traction Bronchiectasis in Patient Management.',
    authors: 'Hino T, Lee KS, Han J, et al.',
    journal: 'Korean J Radiol',
    year: 2021,
    volume: '22(5)',
    pages: '811-828',
    urls: ['https://pmc.ncbi.nlm.nih.gov/articles/PMC8076826/']
  },
  {
    id: 'fernandezperez2021',
    title: 'Diagnosis and Evaluation of Hypersensitivity Pneumonitis: CHEST Guideline and Expert Panel Report.',
    authors: 'Fernández Pérez ER, Travis WD, Lynch DA, et al.',
    journal: 'Chest',
    year: 2021,
    volume: '160',
    pages: 'e97',
    urls: ['https://journal.chestnet.org/article/S0012-3692(21)00686-3/fulltext']
  },
  {
    id: 'koster2021',
    title: 'Diagnosis of Hypersensitivity Pneumonitis in Adults, 2020 Clinical Practice Guideline: Summary for Clinicians.',
    authors: 'Koster MA, Thomson CC, Collins BF, et al.',
    journal: 'Ann Am Thorac Soc',
    year: 2021,
    volume: '18',
    pages: '559',
    urls: ['https://www.atsjournals.org/doi/full/10.1513/AnnalsATS.202009-1195CME']
  },
  {
    id: 'petnak2021',
    title: 'Impact of Antifibrotic Therapy on Mortality and Acute Exacerbation in Idiopathic Pulmonary Fibrosis: A Systematic Review and Meta-Analysis.',
    authors: 'Petnak T, Lertjitbanjong P, Thongprayoon C, Moua T.',
    journal: 'Chest',
    year: 2021,
    volume: '160',
    pages: '1751',
    urls: ['https://journal.chestnet.org/article/S0012-3692(21)01279-4/abstract']
  },
  {
    id: 'richeldi2021',
    title: 'Utility of a Molecular Classifier as a Complement to High-Resolution Computed Tomography to Identify Usual Interstitial Pneumonia.',
    authors: 'Richeldi L, Scholand MB, Lynch DA, et al.',
    journal: 'Am J Respir Crit Care Med',
    year: 2021,
    volume: '203',
    pages: '211',
    urls: ['https://www.atsjournals.org/doi/full/10.1164/rccm.202003-0877OC']
  },
  {
    id: 'mackintosh2021',
    title: 'Interstitial pneumonia with autoimmune features: challenges and controversies.',
    authors: 'Mackintosh JA, Wells AU, Cottin V, et al.',
    journal: 'Eur Respir Rev',
    year: 2021,
    volume: '30',
    pages: '210177',
    urls: ['https://publications.ersnet.org/content/errev/30/162/210177']
  },
  // 2020
  {
    id: 'walsh2020ila',
    title: 'Interstitial lung abnormalities: An update for the clinician',
    authors: 'Walsh SLF, Devaraj A, Enghelmayer JI, et al.',
    journal: 'Respirology',
    year: 2020,
    volume: '25',
    pages: '698-706',
    urls: ['https://onlinelibrary.wiley.com/doi/10.1111/resp.13700']
  },
  {
    id: 'fukihara2020',
    title: 'Probable usual interstitial pneumonia pattern on chest CT: is it sufficient for a diagnosis of idiopathic pulmonary fibrosis?',
    authors: 'Fukihara J, Kondoh Y, Brown KK, et al.',
    journal: 'Eur Respir J',
    year: 2020,
    volume: '55',
    urls: ['https://publications.ersnet.org/content/erj/55/4/1802465']
  },
  {
    id: 'wells2020',
    title: 'Nintedanib in patients with progressive fibrosing interstitial lung diseases-subgroup analyses by interstitial lung disease diagnosis in the INBUILD trial: a randomised, double-blind, placebo-controlled, parallel-group trial.',
    authors: 'Wells AU, Flaherty KR, Brown KK, et al.',
    journal: 'Lancet Respir Med',
    year: 2020,
    volume: '8',
    pages: '453',
    urls: ['https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(20)30036-9/abstract']
  },
  {
    id: 'wijsenbeek2020',
    title: 'Spectrum of Fibrotic Lung Diseases.',
    authors: 'Wijsenbeek M, Cottin V.',
    journal: 'N Engl J Med',
    year: 2020,
    volume: '383',
    pages: '958-68',
    urls: ['https://www.nejm.org/doi/full/10.1056/NEJMra2005230']
  },
  {
    id: 'kreuter2020',
    title: 'Acute exacerbation of idiopathic pulmonary fibrosis: international survey and call for harmonisation.',
    authors: 'Kreuter M, Polke M, Walsh SLF, et al.',
    journal: 'Eur Respir J',
    year: 2020,
    volume: '55',
    pages: '1901760',
    urls: ['https://publications.ersnet.org/content/erj/55/4/1901760']
  },
  {
    id: 'raghu2020hp',
    title: 'Diagnosis of Hypersensitivity Pneumonitis in Adults: An Official ATS/JRS/ALAT Clinical Practice Guideline.',
    authors: 'Raghu G, Remy-Jardin M, Ryerson CJ, et al.',
    journal: 'Am J Respir Crit Care Med',
    year: 2020,
    volume: '202',
    pages: 'e36-e69',
    urls: ['https://www.atsjournals.org/doi/10.1164/rccm.202005-2032ST']
  },
  // 2019
  {
    id: 'fidler2019',
    title: 'Screening for Myositis Antibodies in Idiopathic Interstitial Lung Disease.',
    authors: 'Fidler L, Doubelt I, Kandel S, et al.',
    journal: 'Lung',
    year: 2019,
    volume: '197',
    pages: '277',
    urls: ['https://link.springer.com/article/10.1007/s00408-019-00212-9']
  },
  {
    id: 'flaherty2019',
    title: 'Nintedanib in Progressive Fibrosing Interstitial Lung Diseases.',
    authors: 'Flaherty KR, Wells AU, Cottin V, et al.',
    journal: 'N Engl J Med',
    year: 2019,
    volume: '381',
    pages: '1718',
    urls: ['https://www.nejm.org/doi/pdf/10.1056/NEJMoa1908681']
  },
  // 2018
  {
    id: 'lynch2018',
    title: 'Diagnostic criteria for idiopathic pulmonary fibrosis: a Fleischner Society White Paper.',
    authors: 'Lynch DA, Sverzellati N, Travis WD, et al.',
    journal: 'Lancet Respir Med',
    year: 2018,
    volume: '6',
    pages: '138',
    urls: ['https://www.thelancet.com/journals/lanres/article/PIIS2213-2600(17)30433-2/fulltext']
  },
  {
    id: 'raghu2018',
    title: 'Diagnosis of Idiopathic Pulmonary Fibrosis. An Official ATS/ERS/JRS/ALAT Clinical Practice Guideline.',
    authors: 'Raghu G, Remy-Jardin M, Myers JL, et al.',
    journal: 'Am J Respir Crit Care Med.',
    year: 2018,
    volume: '198(5)',
    pages: 'e44-e68',
    urls: ['https://www.atsjournals.org/doi/10.1164/rccm.201807-1255ST']
  },
  {
    id: 'mancano2018',
    title: 'Classification of idiopathic interstitial pneumonias.',
    authors: 'Mançano AD.',
    journal: 'Radiol Bras',
    year: 2018,
    volume: '51(5)',
    pages: 'V-VI',
    urls: ['https://www.scielo.br/j/rb/a/kVwRC4NtDRndjDdSdQCjndG/']
  },
  // 2016
  {
    id: 'collard2016',
    title: 'Acute Exacerbation of Idiopathic Pulmonary Fibrosis: An International Working Group Report.',
    authors: 'Collard HR, Ryerson CJ, Corte TJ, et al.',
    journal: 'Am J Respir Crit Care Med',
    year: 2016,
    volume: '194(3)',
    pages: '265-275',
    urls: ['https://www.atsjournals.org/doi/full/10.1164/rccm.201604-0801CI']
  },
  // 2010
  {
    id: 'glaspole2010',
    title: 'Differentiating between IPF and NSIP.',
    authors: 'Glaspole I, Goh NSL.',
    journal: 'Chronic Respiratory Disease',
    year: 2010,
    volume: '7(3)',
    pages: '187-195',
    urls: ['https://journals.sagepub.com/doi/10.1177/1479972310376205?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed']
  },
];