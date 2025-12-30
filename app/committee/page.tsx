export default function CommitteePage() {
  const chiefPatrons = [
    { name: "Mr. M. I. Humayun Kabir", affiliation: "Annai Engineering College, Kumbakonam"},
    { name: "Mr. Balasubramanian", affiliation: "Wirdgroup SA, Switzerland"},
  ];

  const patrons = [
    { name: "Dr. Ajith Jubilson", affiliation: "VIT, Andra Pradesh, India"},
    { name: "Mr. Dinesh Arunraj", affiliation: "Skoruz Technologies, California"},
    { name: "Mr. Ameer Sulaiman", affiliation: "Zayin IT Services (OPC) PVT LTD, India "}
  ];

  const conferenceChairs = [
    { name: "Dr. Ajith Jubilson", affiliation: "VIT, Andra Pradesh, India"}
  ];
  
  const generalChairs = [
    { name: "Dr. Xiao zhi Gao", affiliation: "University of Eastern, Finland"},
    { name: "Dr. Indra Priyadharshini", affiliation: "VIT, Chennai, India"}
  ];

  const programChairs = [
    { name: "Dr. G. Manikandan", affiliation: "Annai College of Engineering, kumbakonam"},
  ];

  const internationalAdvisoryCommittee = [
    { name: "Dr. Jafar Ahmad Abed Alzubi", affiliation: "Al-Balqa Applied University, Jordon"},
    { name: "Dr. Xiao Zhi Gao", affiliation: "University of Eastern, Finland"},
    { name: "Dr. George Ghinea", affiliation: "Brunel University, UK"},
    { name: "Dr. Alvaro Rocha", affiliation: "University of Lisbon, Portugal"},
    { name: "Dr. Weiwei Jiang", affiliation: "Beijing University of Posts and Telecommunications, China"},
    { name: "Dr. Danping He", affiliation: "Beijing Jiaotong University, China"},
    { name: "Dr. Muhammad Asghar Khan", affiliation: "Prince Mohammad Bin Fahd University, Saudi Arabia"},
    { name: "Dr. Olabiyisi Stephen Olatunde", affiliation: "Ladoke Akintola University of Technology, Nigeria"},
    { name: "Dr. Kishore Bingi", affiliation: "Universiti Teknologi PETRONAS, Malaysia"},
    { name: "Dr. Youssouf El Allioui", affiliation: "Sultan Moulay Slimane University, Morocco"},
    { name: "Dr. Hugo Pedro", affiliation: "University of Beira Interior, Portugal"},
    { name: "Dr. Mohamed Mosbah", affiliation: "University of Bordeaux, France"},
     { name: "Dr.Imane Aly Saroit Ismail", affiliation: "Cairo University, Egypt"},
    { name: "Dr. Leung Yiu Wing", affiliation: "Hong Kong Baptist University, Hong Kong"},
    { name: "Mr. Ramata Mosissa Gichila", affiliation: "Mettu university, Ethiopia"},
    { name: "Dr. Sathish Kumar V E ", affiliation: "Sunway University, Malaysia"},  
    { name: "Mr. Karthick Kumar", affiliation: "Spirent Communications, USA"},
    { name: "Mr. Sivakumar", affiliation: "Solutions by STC, UAE"},  
    { name: "Mr. Rajkumar Arumugam", affiliation: "Upsource, UAE"},
    { name: "Mr. Veeramani Santhosh Prabhu", affiliation: "SICK Pvt Ltd, Australia"},
    { name: "Mr. Syed Nizamudeen", affiliation: "GlobalTiX Singapore Pvt Ltd, Singapore"}
    
    
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. T M Balakrishnan Nair", affiliation: "Indian National Centre for Ocean Information Services, Hyderabad"},
    { name: "Dr. Sarfraz Hussain", affiliation: "REVA University, Bangalore"},
    { name: "Dr. Sharma T P", affiliation: "National Institute of Technology, Hamirpur"},
    { name: "Dr. Venkatesan S", affiliation: "National Institute of Technology, Allahabad"},
    { name: "Dr. S Janakiraman", affiliation: "Pondicherry University, Pondicherry"},
    { name: "Dr. P Santhi Thilagam", affiliation: "National Institute of Technology, Karnataka"},
    { name: "Dr. A S Karthick Kannan", affiliation: "Mepco Schlenk Engineering College, Sivakasi"},
    { name: "Dr. Kottilingam", affiliation: "Anna University, Chennai"},
    { name: "Dr. Gunasekaran Raja", affiliation: "Anna University, Chennai"},
    { name: "Dr. Rajendra Boopathy Sadayan", affiliation: "Anna University, Chennai"},
    { name: "Dr. A Arokiarajan", affiliation: "Indian Institute of Technology, Madras"},
    { name: "Dr. Ramakrishnan Swaminathan", affiliation: "Indian Institute of Technology, Madras"},
    { name: "Dr. A Chandra Sekhara Rao", affiliation: "Indian Institute of Technology, Dhanbad"},
    { name: "Dr. Venkatesan", affiliation: "National Institute of Technology,Pondicherry"},
    { name: "Dr. Veningston K", affiliation: "National Institute of Technology,Srinagar"},
    { name: "Dr. K Umamaheswari", affiliation: "PSG College of Technology, Coimbatore"},
    { name: "Dr. U Srinivasulu Reddy", affiliation: "National Institute of Technology, Triruchirappalli"},
    { name: "Dr. Anil Sukheja", affiliation: "ISRO, Ahmadabad"},
    { name: "Dr. Bharath Kumar ", affiliation: "Indian Institute of Technology, Tirupati"},  
    { name: "Dr. A Chitra", affiliation: "PSG College of Technology, Coimbatore"},
    { name: "Dr. Sriram Birudavolu", affiliation: "Data Security Council of India, Noida"},
    { name: "Prof. Rajanikanth Aluvalu", affiliation: "Symbiosis Institute of Technology, Hyderabad"},  
    { name: "Dr. Pilli Emmanuel Shubhakar", affiliation: " Malaviya National Institute of Technology, Jaipur"},
    { name: "Dr. Shashikant Patil", affiliation: " Atlas SkillTech University, Mumbai"},
    { name: "Dr. N Malathy", affiliation: "Mepco Schlenk Engineering College, Sivakasi"},
    { name: "Dr. K Vijaya Kumar", affiliation: "S R University, Hyderabad"},
    { name: "Dr. S Devi Mahalakshmi", affiliation: "Mepco Schlenk Engineering College, Sivakasi"},
     { name: "Dr. Aswani Kumar", affiliation: "VIT, Vellore"},
     { name: "Dr. R B V Subramaanyam", affiliation: "National Institute of Technology,Warangal"},
     { name: "Dr. Swagatam Das", affiliation: "Indian Institute of Technology, Kolkata"},
     { name: "Dr. B Annappa", affiliation: "National Institute of Technology, Karanataka"},
     { name: "Dr. S Indra Priyadharshini", affiliation: "VIT, Chennai"},
     { name: "Dr. Chittaranjan hota", affiliation: "Birla Institute of Technology & Science, Pilani, Hyderabad"},
      { name: "Dr. Thilak Vadicherla", affiliation: "Indian Patent Office, Chennai"}
            
         
      
  ];

  const technicalCommittee = [
    { name: "Mr. Machavarapu Venkata Rao", affiliation: "Sunsoft Solutions Inc, USA"},
    { name: "Dr. Margarita N. Favorskaya", affiliation: "Siberian State Aerospace Unviersity of Science and Technology, Russia"},
    { name: "Dr. Lindon Falconer", affiliation: "The University of West Indies Mona, Jamaica"},
    { name: "Dr. Gunjan Mansingh", affiliation: "The University of West Indies Mona, Jamaica"},  
    { name: "Dr. Rakhee", affiliation: "The University of West Indies Mona, Jamaica"},
    { name: "Dr. Andre Coy", affiliation: "The University of West Indies Mona, Jamaica"},
    { name: "Dr. Rico S Santos", affiliation: "Technological University of the Philippies-Taguig, Philippies"},
    { name: "Dr. Maracris M Lappay", affiliation: "Technological University of the Philippies-Taguig, Philippies"},
    { name: "Dr. T V Rajinikanth", affiliation: "SNSIT, Hyderabad"},
    { name: "Dr. Maheswara Rao Valluri", affiliation: "Quinfosystems,Hyderabad"},
    { name: "Dr. A V Krishna Prasad", affiliation: "CSI, Hyderabad"},
    { name: "Dr. K Jairam Naik", affiliation: "National Institute of Technology, Rajpur"},
    { name: "Dr. E Suresh Babu", affiliation: "National Institute of Technology, Warangal"},
    { name: "Dr. Earnest Paul Ijjina", affiliation: "National Institute of Technology, Warangal"},
    { name: "Dr. Hemant Kasturiwale", affiliation: "Thakur College of Engineering and Technology, Mumbai"},
    { name: "Dr. Preeti Rai", affiliation: "Gyan Ganga Institute of Technology and sciences, Jabalpur"},
    { name: "Dr. Somnath Thigale", affiliation: "College of Engineering and Research, Pune "},
    { name: "Dr. Puli Danaiah", affiliation: "Srinivasa Institute of Engineering and Technology, Amalapuram " },
    { name: "Dr. Krishna Kumar Jha", affiliation: "Swami Vivekananda Institute of Science amd Technolgy, Kolkata " },
    { name: "Dr. Atul Negi", affiliation: "Swami Vivekananda Institute of Science amd Technolgy, Kolkata "},
    { name: "Dr. Riyad Syed", affiliation:"Jawaharalal Nehru Technical Univerity,Hyderabad"},
    { name: "Dr. Balakrishnan Nair", affiliation: "Indian National Centre for Ocean Information Services, Hyderabad "},
    { name: "Dr. B Sailaja", affiliation: "ICAR-IIRR, Hyderabad "},
    { name: "Dr. Padmasai Y", affiliation: "VNR VJIET, Hyderabad "},
    { name: "Dr. Anuradha K", affiliation: "VNR VJIET, Hyderabad "},
    { name: "Dr. Ramesh Chandra G", affiliation: "VNR VJIET, Hyderabad "},
    { name: "Dr. Pardha Saradhi D", affiliation: "VNR VJIET, Hyderabad "},
    { name: "Dr. Srinivasa Rao D", affiliation: "VNR VJIET, Hyderabad "},
     { name: "Dr. Sandhya N", affiliation: "VNR VJIET, Hyderabad "},  
     { name: "Dr. Siva Skandha Sangala", affiliation: "CMR College of Engineering and Technology, Hyderabad "},
     { name: "Dr. Ravichander Janapati", affiliation: "SR University, Warangal "}, 
      { name: "Dr. Rajasekar ", affiliation: "VNR VJIET, Hyderabad " },
      { name: "Dr. Hameed M A ", affiliation: "Osmania University, Hyderabad " },
      { name: "Dr. Rakesh Matam ", affiliation: "IIT, Guwahati "},
      { name: "Dr. Venkanna U ", affiliation: "IIT, Nayaraipur " },
      { name: "Dr. Kiranmani C ", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Kiranmayee B V ", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Nagini S", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Brahmananda Reddy", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Siva Kumar P V", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Vasundhara D N", affiliation: "VNR VJIET, Hyderabad " },
      { name: "Dr. Deepak Sukheja", affiliation: "VNR VJIET, Hyderabad "},
      { name: "Dr. Rajkumar S", affiliation: "VIT, Vellore " },
      { name: "Dr. Ilaiah Kavati", affiliation: "MLRIT, Hyderabad " },
      { name: "Dr. Pilli Emmanuel Subhakar", affiliation: "MNIT, Jaipur "},
      { name: "Dr. Saroj Biswas", affiliation: "National Institute of Technology  ,Silchar "}
  ];

  const organizingCommittee = [
    { name: "Mr. Senthil Kumar", affiliation: "Annai College of Engineering & Technology", role: "Associate Professor" },
    { name: "Mrs. Nagarani", affiliation: "Annai College of Engineering & Technology", role: "Associate Professor" },
    { name: "Mr. Balaji Ramakrishnan", affiliation: "Annai College of Engineering & Technology", role: "Associate Professor" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Organizing Committee</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished researchers and professionals organizing ICTAIML
            </p>
          </div>

          <div className="space-y-12">
            
            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Chief Patrons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chiefPatrons.map((patron, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="font-bold text-lg text-gray-900">{patron.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{patron.affiliation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Patrons
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {patrons.map((patron, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="font-bold text-lg text-gray-900">{patron.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{patron.affiliation}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Conference Chairs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {conferenceChairs.map((chair, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="font-bold text-lg text-gray-900">{chair.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{chair.affiliation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                General Chairs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generalChairs.map((chair, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="font-bold text-lg text-gray-900">{chair.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{chair.affiliation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Programme Chairs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programChairs.map((chair, idx) => (
                  <div key={idx} className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                    <p className="font-bold text-lg text-gray-900">{chair.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{chair.affiliation}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                International Advisory Committee
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {internationalAdvisoryCommittee.map((member, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{member.affiliation}</p>                    
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                National Advisory Committee
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nationalAdvisoryCommittee.map((member, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{member.affiliation}</p>                    
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Technical Committee
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technicalCommittee.map((member, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{member.affiliation}</p>                 
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-indigo-500">
                Organizing Committee
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organizingCommittee.map((member, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-indigo-600 text-xs mb-3 font-normal">{member.affiliation}</p>                    
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

