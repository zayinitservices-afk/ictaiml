export default function CommitteePage() {
  const chiefPatrons = [
    { name: "Mr. M. I. Humayun Kabir", affiliation: "Annai Engineering College, Kumbakonam", role: "Chairman" },
    { name: "Mr. Balasubramanian", affiliation: "Wirdgroup SA, Switzerland", role: "Cybersecurity Specialist" },
  ];

  const patrons = [
    { name: "Dr. Ajith Jubilson", affiliation: "VIT, Andra Pradesh, India", role: "Associate Professor" },
    { name: "Mr. Dinesh Arunraj", affiliation: "Skoruz Technologies, California", role: "Software Engineer" },
    { name: "Mr. Ameer Sulaiman", affiliation: "Zayin IT Services (OPC) PVT LTD, India ", role: "Technology Architect" }
  ];
  
  const generalChairs = [
    { name: "Dr. Xiao zhi Gao", affiliation: "University of Eastern, Finland", role: "Professor"},
    { name: "Dr. Indra Priyadharshini", affiliation: "VIT, Chennai, India", role: "Professor"}
  ];

  const programChairs = [
    { name: "Dr. G. Manikandan", affiliation: "Annai College of Engineering, kumbakonam", role: "Principal" },
  ];

  const internationalAdvisoryCommittee = [
    { name: "Dr. Jafar Ahmad Abed Alzubi", affiliation: "Al-Balqa Applied University, Jordon", track: "Professor" },
    { name: "Dr. Xiao Zhi Gao", affiliation: "University of Eastern, Finland", track: "Professor" },
    { name: "Dr. George Ghinea", affiliation: "Brunel University, UK", track: "Professor" },
    { name: "Dr. Alvaro Rocha", affiliation: "University of Lisbon, Portugal", track: "Professor" },
    { name: "Dr. Weiwei Jiang", affiliation: "Beijing University of Posts and Telecommunications, China", track: "Professor" },
    { name: "Dr. Danping He", affiliation: "Beijing Jiaotong University, China", track: "Associate Professor" },
    { name: "Dr. Muhammad Asghar Khan", affiliation: "Prince Mohammad Bin Fahd University, Saudi Arabia", track: "Professor" },
    { name: "Dr. Olabiyisi Stephen Olatunde", affiliation: "Ladoke Akintola University of Technology, Nigeria", track: "Professor" },
    { name: "Dr. Kishore Bingi", affiliation: "Universiti Teknologi PETRONAS, Malaysia", track: "Professor" },
    { name: "Dr. Youssouf El Allioui", affiliation: "Sultan Moulay Slimane University, Morocco", track: "Research Scientist" },
    { name: "Dr. Hugo Pedro", affiliation: "University of Beira Interior, Portugal", track: "Professor"},
    { name: "Dr. Mohamed Mosbah", affiliation: "University of Bordeaux, France", track: "Professor"},
     { name: "Dr.Imane Aly Saroit Ismail", affiliation: "Cairo University, Egypt", track: "Professor" },
    { name: "Dr. Leung Yiu Wing", affiliation: "Hong Kong Baptist University, Hong Kong", track: "Professor" },
    { name: "Mr. Ramata Mosissa Gichila", affiliation: "Mettu university, Ethiopia", track: "Assistant Professor" },
    { name: "Dr. Sathish Kumar V E ", affiliation: "Sunway University, Malaysia", track: "Professor" },  
    { name: "Mr. Karthick Kumar", affiliation: "Spirent Communications, USA", track: "Product Verification Engineer" },
    { name: "Mr. Sivakumar", affiliation: "Solutions by STC, UAE", track: "Infrastructure Specialist" },  
    { name: "Mr. Rajkumar Arumugam", affiliation: "Upsource, UAE", track: "Database Director" },
    { name: "Mr. Veeramani Santhosh Prabhu", affiliation: "SICK Pvt Ltd, Australia", track: "Service Engineer" },
    { name: "Mr. Syed Nizamudeen", affiliation: "GlobalTiX Singapore Pvt Ltd, Singapore", track: "Product Manager" },
    
    
  ];

  const nationalAdvisoryCommittee = [
    { name: "Dr. T M Balakrishnan Nair", affiliation: "Indian National Centre for Ocean Information Services, Hyderabad", track: "Scientist" },
    { name: "Dr. Sarfraz Hussain", affiliation: "REVA University, Bangalore", track: "Professor" },
    { name: "Dr. Sharma T P", affiliation: "National Institute of Technology, Hamirpur", track: "Professor" },
    { name: "Dr. Venkatesan S", affiliation: "National Institute of Technology, Allahabad", track: "Professor" },
    { name: "Dr. S Janakiraman", affiliation: "Pondicherry University, Pondicherry", track: "Professor" },
    { name: "Dr. P Santhi Thilagam", affiliation: "National Institute of Technology, Karnataka", track: "Professor" },
    { name: "Dr. A S Karthick Kannan", affiliation: "Mepco Schlenk Engineering College, Sivakasi", track: "Associate Professor" },
    { name: "Dr. Kottilingam", affiliation: "Anna University, Chennai", track: "Professor" },
    { name: "Dr. Gunasekaran Raja", affiliation: "Anna University, Chennai", track: "Professor" },
    { name: "Dr. Rajendra Boopathy Sadayan", affiliation: "Anna University, Chennai", track: "Professor" },
    { name: "Dr. A Arokiarajan", affiliation: "Indian Institute of Technology, Madras", track: "Professor" },
    { name: "Dr. Ramakrishnan Swaminathan", affiliation: "Indian Institute of Technology, Madras", track: "Professor"},
    { name: "Dr. A Chandra Sekhara Rao", affiliation: "Indian Institute of Technology, Dhanbad", track: "Professor"},
    { name: "Dr. Venkatesan", affiliation: "National Institute of Technology,Pondicherry", track: "Professor" },
    { name: "Dr. Veningston K", affiliation: "National Institute of Technology,Srinagar", track: "Assistant Professor" },
    { name: "Dr. K Umamaheswari", affiliation: "PSG College of Technology, Coimbatore", track: "Professor" },
    { name: "Dr. U Srinivasulu Reddy", affiliation: "National Institute of Technology, Triruchirappalli", track: "Professor" },
    { name: "Dr. Anil Sukheja", affiliation: "ISRO, Ahmadabad", track: "Scientist" },
    { name: "Dr. Bharath Kumar ", affiliation: "Indian Institute of Technology, Tirupati", track: "Professor" },  
    { name: "Dr. A Chitra", affiliation: "PSG College of Technology, Coimbatore", track: "Professor" },
    { name: "Dr. Sriram Birudavolu", affiliation: "Data Security Council of India, Noida", track: "Cheif Executive Officer" },
    { name: "Prof. Rajanikanth Aluvalu", affiliation: "Symbiosis Institute of Technology, Hyderabad", track: "Director" },  
    { name: "Dr. Pilli Emmanuel Shubhakar", affiliation: " Malaviya National Institute of Technology, Jaipur", track: "Associate Professor" },
    { name: "Dr. Shashikant Patil", affiliation: " Atlas SkillTech University, Mumbai", track: "Professor" },
    { name: "Dr. N Malathy", affiliation: "Mepco Schlenk Engineering College, Sivakasi", track: "Associate Professor" },
    { name: "Dr. K Vijaya Kumar", affiliation: "S R University, Hyderabad", track: "Professor" },
    { name: "Dr. S Devi Mahalakshmi", affiliation: "Mepco Schlenk Engineering College, Sivakasi", track: "Professor" },
     { name: "Dr. Aswani Kumar", affiliation: "VIT, Vellore", track: "Professor" },
     { name: "Dr. R B V Subramaanyam", affiliation: "National Institute of Technology,Warangal", track: "Professor" },
     { name: "Dr. Swagatam Das", affiliation: "Indian Institute of Technology, Kolkata", track: "Professor"},
     { name: "Dr. B Annappa", affiliation: "National Institute of Technology, Karanataka", track: "Professor"},
     { name: "Dr. S Indra Priyadharshini", affiliation: "VIT, Chennai", track: "Assistant Professor" },
     { name: "Dr. Chittaranjan hota", affiliation: "Birla Institute of Technology & Science, Pilani, Hyderabad", track: "Professor" },
      { name: "Dr. Thilak Vadicherla", affiliation: "Indian Patent Office, Chennai", track: "Assistant Controller" },
            
         
      
  ];

  const technicalCommittee = [
    { name: "Mr. Machavarapu Venkata Rao", affiliation: "Sunsoft Solutions Inc, USA", track: "Associate Vice President" },
    { name: "Dr. Margarita N. Favorskaya", affiliation: "Siberian State Aerospace Unviersity of Science and Technology, Russia", track: "Professor" },
    { name: "Dr. Lindon Falconer", affiliation: "The University of West Indies Mona, Jamaica", track: "Professor" },
    { name: "Dr. Gunjan Mansingh", affiliation: "The University of West Indies Mona, Jamaica", track: "Professor" },  
    { name: "Dr. Rakhee", affiliation: "The University of West Indies Mona, Jamaica", track: "Professor" },
    { name: "Dr. Andre Coy", affiliation: "The University of West Indies Mona, Jamaica", track: "Professor" },
    { name: "Dr. Rico S Santos", affiliation: "Technological University of the Philippies-Taguig, Philippies", track: "Professor" },
    { name: "Dr. Maracris M Lappay", affiliation: "Technological University of the Philippies-Taguig, Philippies", track: "Professor" },
    { name: "Dr. T V Rajinikanth", affiliation: "SNSIT, Hyderabad", track: "Professor" },
    { name: "Dr. Maheswara Rao Valluri", affiliation: "Quinfosystems,Hyderabad", track: "Cheif Executive Officer" },
    { name: "Dr. A V Krishna Prasad", affiliation: "CSI, Hyderabad", track: "Associate Professor"},
    { name: "Dr. K Jairam Naik", affiliation: "National Institute of Technology, Rajpur", track: "Assistant Professor"},
    { name: "Dr. E Suresh Babu", affiliation: "National Institute of Technology, Warangal", track: "Professor"},
    { name: "Dr. Earnest Paul Ijjina", affiliation: "National Institute of Technology, Warangal", track: "Professor" },
    { name: "Dr. Hemant Kasturiwale", affiliation: "Thakur College of Engineering and Technology, Mumbai", track: " Professor" },
    { name: "Dr. Preeti Rai", affiliation: "Gyan Ganga Institute of Technology and sciences, Jabalpur", track: "Professor" },
    { name: "Dr. Somnath Thigale", affiliation: "College of Engineering and Research, Pune ", track: "Assoicate Professor" },
    { name: "Dr. Puli Danaiah", affiliation: "Srinivasa Institute of Engineering and Technology, Amalapuram ", track: "Professor" },
    { name: "Dr. Krishna Kumar Jha", affiliation: "Swami Vivekananda Institute of Science amd Technolgy, Kolkata ", track: "Assoicate Professor" },
    { name: "Dr. Atul Negi", affiliation: "Swami Vivekananda Institute of Science amd Technolgy, Kolkata ", track: " Professor"},
    { name: "Dr. Riyad Syed", affiliation:"Jawaharalal Nehru Technical Univerity,Hyderabad",track: " Cheif Scientific Officer"},
    { name: "Dr. Balakrishnan Nair", affiliation: "Indian National Centre for Ocean Information Services, Hyderabad ", track: "Scientist" },
    { name: "Dr. B Sailaja", affiliation: "ICAR-IIRR, Hyderabad ", track: "Principal Scientist" },
    { name: "Dr. Padmasai Y", affiliation: "VNR VJIET, Hyderabad ", track: "Professor" },
    { name: "Dr. Anuradha K", affiliation: "VNR VJIET, Hyderabad ", track: "Professor" },
    { name: "Dr. Ramesh Chandra G", affiliation: "VNR VJIET, Hyderabad ", track: "Professor" },
    { name: "Dr. Pardha Saradhi D", affiliation: "VNR VJIET, Hyderabad ", track: "Professor" },
    { name: "Dr. Srinivasa Rao D", affiliation: "VNR VJIET, Hyderabad ", track: "Associate Professor" },
     { name: "Dr. Sandhya N", affiliation: "VNR VJIET, Hyderabad ", track: "Professor" },  
     { name: "Dr. Siva Skandha Sangala", affiliation: "CMR College of Engineering and Technology , Hyderabad ", track: "Professor" },
     { name: "Dr. Ravichander Janapati", affiliation: "SR University , Warangal ", track: "Professor" }, 
      { name: "Dr. Rajasekar ", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Hameed M A ", affiliation: "Osmania University , Hyderabad ", track: "Professor" },
      { name: "Dr. Rakesh Matam ", affiliation: "IIT , Guwahati ", track: "Professor" },
      { name: "Dr. Venkanna U ", affiliation: "IIT , Nayaraipur ", track: "Professor" },
      { name: "Dr. Kiranmani C ", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Kiranmayee B V ", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Nagini S", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Brahmananda Reddy", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Siva Kumar P V", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Vasundhara D N", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Deepak Sukheja", affiliation: "VNR VJIET , Hyderabad ", track: "Professor" },
      { name: "Dr. Rajkumar S", affiliation: "VIT , Vellore ", track: "Professor" },
      { name: "Dr. Ilaiah Kavati", affiliation: "MLRIT , Hyderabad ", track: "Professor" },
      { name: "Dr. Pilli Emmanuel Subhakar", affiliation: "MNIT , Jaipur ", track: "Professor" },
      { name: "Dr. Saroj Biswas", affiliation: "National Institute of Technology  ,Silchar ", track: "Professor" },
      


  ];

  const organizingCommittee = [
    { name: "Dr. Alex Johnson", affiliation: "Local Organizing Chair", role: "Logistics" },
    { name: "Dr. Yuki Tanaka", affiliation: "Local Organizing Co-Chair", role: "Publicity" },
    { name: "Dr. Ahmed Hassan", affiliation: "Local Organizing Co-Chair", role: "Finance" },
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
                    <p className="text-indigo-600 font-semibold">{patron.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{patron.affiliation}</p>
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
                    <p className="text-indigo-600 font-semibold">{patron.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{patron.affiliation}</p>
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
                    <p className="text-indigo-600 font-semibold">{chair.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{chair.affiliation}</p>
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
                    <p className="text-indigo-600 font-semibold">{chair.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{chair.affiliation}</p>
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
                    <p className="text-indigo-600 font-semibold">{member.track}</p>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>                    
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
                    <p className="text-indigo-600 font-semibold">{member.track}</p>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>                    
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
                    <p className="text-indigo-600 font-semibold">{member.track}</p>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>                    
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
                    <p className="text-indigo-600 font-semibold">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>                    
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

