/* ============================================================
   i18n.js — Bilingual translation engine (EL primary / EN)
   ============================================================ */
(function () {

  const translations = {
    el: {
      /* ── Navigation ───────────────────────────── */
      'nav.home': 'Αρχικη',
      'nav.doctor': 'Ο Ιατρος',
      'nav.services': 'Υπηρεσιες',
      'nav.contact': 'Επικοινωνια',

      /* ── Shared booking button ────────────────── */
      'booking.btn': 'Ηλεκτρονικη Κρατηση',

      /* ── index.html — article cards ──────────── */
      'card1.title': 'Οδοντικά Εμφυτεύματα: Πότε Είναι η Κατάλληλη Στιγμή;',
      'card1.excerpt': 'Τα οδοντικά εμφυτεύματα αποτελούν την πλέον αξιόπιστη λύση για την αποκατάσταση των δοντιών. Ανακαλύψτε πότε αυτή εξαιρετική επιλογή είναι η ιδανική για εσάς και το χαμόγελό σας.',
      'card2.title': 'Μίνι Οδοντικά Εμφυτεύματα',
      'card2.excerpt': 'Τα "μίνι εμφυτεύματα" (Mini Implants) αποτελούν μια σύγχρονη και ελάχιστα επεμβατική λύση. Ας δούμε πότε πλεονεκτούν έναντι των παραδοσιακών εμφυτευμάτων.',
      'card3.title': 'Ορθοδοντική Θεραπεία',
      'card3.excerpt': 'Η αναβάθμιση της αισθητικής και της υγείας. Η ορθοδοντική φροντίζει για τη διόρθωση της θέσης των δοντιών, χαρίζοντάς σας ένα αρμονικό, λαμπερό και υγιές χαμόγελο.',

      /* ── index.html — modal 2 (implants) ─────── */
      'modal2.title': 'Πότε Είναι η Κατάλληλη Στιγμή για Οδοντικά Εμφυτεύματα;',
      'modal2.p1': 'Ίσως γνωρίζετε ήδη ότι τα οδοντικά εμφυτεύματα αποτελούν τον πιο σύγχρονο και αποτελεσματικό τρόπο για την αναπλήρωση φθαρμένων ή χαμένων δοντιών. Πότε, όμως, είναι η ιδανική στιγμή για να προχωρήσετε σε αυτή τη λύση;',
      'modal2.p2': '<span class="font-bold text-gray-900">Για την αποκατάσταση της αισθητικής του προσώπου σας</span><br>Ο κύριος ρόλος των οδοντικών εμφυτευμάτων είναι να επαναφέρουν το χαμόγελό σας στην αρχική του αίγλη. Σε αντίθεση με τις γέφυρες, παρέχουν μια μόνιμη, εξαιρετικά φυσική δομή που αντέχει στον χρόνο.',
      'modal2.p3': '<span class="font-bold text-gray-900">Για την προστασία και τη διατήρηση του οστού της γνάθου</span><br>Η απώλεια δοντιών μπορεί βαθμιαία να οδηγήσει σε αλλοίωση και απορρόφηση του οστού. Καθυστερώντας την τοποθέτηση ενός εμφυτεύματος ρισκάρετε την απώλεια οστικής μάζας που είναι απαραίτητη για τη μελλοντική στήριξή του.',
      'modal2.p4': 'Για μια εξατομικευμένη ενημέρωση και για να μάθετε πώς μπορούμε να επαναφέρουμε το χαμόγελό σας, επικοινωνήστε σήμερα με το <span class="text-brand-blue font-bold">Οδοντιατρείο του Παλαιού Φαλήρου</span> στο 210 931-2651.',

      /* ── index.html — modal 3 (mini implants) ── */
      'modal3.title': 'Μίνι Οδοντικά Εμφυτεύματα (Mini Implants)',
      'modal3.p1': 'Μια ιδιαίτερα δημοφιλής τάση στη σύγχρονη οδοντιατρική είναι η επιλογή των "μίνι οδοντικών εμφυτευμάτων" έναντι των παραδοσιακών. Ας εξετάσουμε ποια είναι τα οφέλη και ποιοι οι πιθανοί περιορισμοί.',
      'modal3.p2': '<span class="font-bold text-gray-900">Τα Πλεονεκτήματα</span><br>Τα μίνι εμφυτεύματα είναι ελάχιστα επεμβατικά, απαιτούν λιγότερο χρόνο τοποθέτησης και συχνά ενδείκνυνται για μικρότερους χώρους ή για ασθενείς με περιορισμένη οστική μάζα όπου τα κλασικά εμφυτεύματα δεν θα μπορούσαν να στηριχθούν.',
      'modal3.p3': '<span class="font-bold text-gray-900">Τι Πρέπει να Προσέξετε</span><br>Επειδή πρόκειται για μια νεότερη προσέγγιση σε σχέση με τα συμβατικά εμφυτεύματα, δεν διαθέτουμε ακόμα μακροχρόνιες μελέτες δεκαετιών για την αντοχή τους σε όλες τις συνθήκες. Η σωστή διάγνωση και ανάλυση 3D του οστού σας είναι απαραίτητη προγραμματίζοντας τη θεραπεία.',

      /* ── index.html — modal 4 (orthodontics) ─── */
      'modal4.title': 'Ο ρόλος της Ορθοδοντικής',
      'modal4.p1': 'Η ορθοδοντική είναι ο τομέας της οδοντιατρικής που επικεντρώνεται στη διόρθωση της θέσης των δοντιών και των γνάθων, προσφέροντας λειτουργικότητα και αισθητική αρμονία.',
      'modal4.p2': '<span class="font-bold text-gray-900">Τα "στραβά" δόντια δεν είναι μόνο αισθητικό ζήτημα:</span><br>1. Δυσκολεύουν τον σωστό καθαρισμό, αυξάνοντας τον κίνδυνο τερηδόνας και ουλίτιδας.<br>2. Προκαλούν ανισομερή κατανομή των δυνάμεων κατά τη μάσηση, που μπορεί να οδηγήσει σε φθορές.',
      'modal4.p3': '<span class="font-bold text-gray-900">Η Ορθοδοντική στην Εμφυτευματολογία</span><br>Σε αρκετές περιπτώσεις ασθενών με ελλείψεις δοντιών, η ορθοδοντική θεραπεία προηγείται, ώστε να δημιουργηθεί ο κατάλληλος χώρος για την ασφαλή τοποθέτηση ενός εμφυτεύματος. Απαιτείται στενή συνεργασία των δύο ειδικοτήτων για ένα τέλειο τελικό αποτέλεσμα.',

      /* ── Quotes ───────────────────────────────── */
      'quote.index': '&quot; Η υγεία και η λειτουργικότητα του χαμόγελού σας αποτελούν για εμάς κορυφαία προτεραιότητα.<br>Στο υπερσύγχρονο ιατρείο μας, συνδυάζουμε την επιστημονική αρτιότητα με την ανθρώπινη προσέγγιση. Σας καλωσορίζουμε σε ένα περιβάλλον όπου η προσωπική φροντίδα συναντά την καινοτομία. &quot;',
      'quote.about': '&quot; Η αφοσίωσή μας στην επιστήμη της οδοντιατρικής μεταφράζεται σε εξατομικευμένη και ουσιαστική φροντίδα για κάθε ασθενή.<br>Με οδηγό τη συνεχή εξέλιξη και το σεβασμό στις ανάγκες σας, χτίζουμε σχέσεις εμπιστοσύνης που διαρκούν. Αποτελεί τιμή μας να αναλαμβάνουμε τη φροντίδα του χαμόγελού σας. &quot;',
      'quote.services': '&quot; Προσφέρουμε ένα ευρύ φάσμα σύγχρονων οδοντιατρικών θεραπειών, απόλυτα προσαρμοσμένων στις δικές σας μοναδικές απαιτήσεις.<br>Με την υποστήριξη τεχνολογίας αιχμής και εξειδικευμένης γνώσης, διασφαλίζουμε ανώδυνα και άριστα αποτελέσματα. Κάθε θεραπεία σχεδιάζεται με γνώμονα τη βέλτιστη στοματική σας υγεία. &quot;',
      'quote.contact': '&quot; Είμαστε πάντα στη διάθεσή σας για να ακούσουμε τις ανάγκες σας και να επιλύσουμε όποιες απορίες έχετε.<br>Επικοινωνήστε μαζί μας σήμερα για να προγραμματίσουμε την επόμενη επίσκεψή σας στο ιατρείο. Με μεγάλη χαρά αναμένουμε να σας εξυπηρετήσουμε από κοντά. &quot;',

      /* ── about.html — biography ───────────────── */
      'about.p1': 'Με βαθιά αφοσίωση στην επιστήμη και τον άνθρωπο, ο Δρ. Άγγελος Μοσχόπουλος ξεκίνησε την ακαδημαϊκή του πορεία στο Πανεπιστήμιο McGill, ολοκληρώνοντας το 1992 τις σπουδές του στη Βιολογία, με εξειδίκευση στη Μικροβιολογία και την Ανοσολογία.',
      'about.p2': 'Η αγάπη του για την έρευνα τον οδήγησε στο Ελληνικό Ινστιτούτο Παστέρ, όπου εργάστηκε ως ερευνητής για δύο χρόνια, προτού αφοσιωθεί στην Οδοντιατρική, λαμβάνοντας το πτυχίο του από το Πανεπιστήμιο Semmelweis το 1999.',
      'about.p3': 'Ο Δρ. Μοσχόπουλος ασκεί την οδοντιατρική στα νότια προάστια από το 2002, καλωσορίζοντας τους ασθενείς του στην προσωπική του κλινική εμφυτευμάτων στο Παλαιό Φάληρο. Παράλληλα, από το 2003 αποτελεί Επιστημονικό Σύμβουλο στο τμήμα Στοματικής και Γναθοπροσωπικής Χειρουργικής του Νοσοκομείου Metropolitan.',
      'about.p4': 'Εκεί έχει αναπτύξει υψηλή εξειδίκευση και εμπειρία στις θεραπείες με οδοντικά εμφυτεύματα, δίνοντας ιδιαίτερη έμφαση στην άρτια διαχείριση και την πλήρη αισθητική και λειτουργική αποκατάσταση του χαμόγελου.',
      'about.p5': 'Με όραμα την προσφορά στην κοινωνία, το 2001 συνέβαλε καθοριστικά στην ίδρυση της Οδοντιατρικής Κλινικής των Δημοτικών Ιατρείων Παλαιού Φαλήρου.',
      'about.p6': 'Εδώ και περισσότερες από δύο δεκαετίες, φροντίζει με χαρά και υπευθυνότητα την προληπτική οδοντιατρική των παιδιών του δήμου. Η πολύτιμη εθελοντική του δράση τιμήθηκε το 2015 σε ειδική τελετή από τους Δήμους Παλαιού Φαλήρου και Πειραιά.',

      /* ── services.html ────────────────────────── */
      'services.p1': 'Στο επίκεντρο της φιλοσοφίας μας βρίσκεται η ευημερία και το χαμόγελο κάθε ασθενούς. Πιστεύουμε ακράδαντα πως ο προσεκτικός σχεδιασμός της θεραπείας, η συστηματική εκπαίδευση στη σωστή στοματική υγιεινή και η προληπτική φροντίδα αποτελούν τα ισχυρότερα θεμέλια για υγιείς και ανθεκτικές αποκαταστάσεις που αντέχουν στον χρόνο.',
      'services.p2': 'Το ταξίδι προς ένα τέλειο χαμόγελο ξεκινά πάντα από ένα υγιές θεμέλιο. Μέσα από σχολαστικό καθαρισμό, άμεση αντιμετώπιση της τερηδόνας και στοχευμένες θεραπείες, διασφαλίζουμε την ιδανική κατάσταση της στοματικής κοιλότητας. Μόνο τότε προχωράμε με σιγουριά και ασφάλεια στο επόμενο στάδιο της αποκατάστασης των δοντιών μέσω της σύγχρονης εμφυτευματολογίας.',
      'services.p3': 'Γνωρίζοντας πως η επίσκεψη στον οδοντίατρο μπορεί να προκαλεί άγχος, έχουμε διαμορφώσει έναν χώρο ζεστό, φιλόξενο και απόλυτα άνετο. Με εύκολη πρόσβαση, μεγάλη ευελιξία στα ραντεβού —ακόμα και τα Σάββατα— και πρωταρχικό μας μέλημα τον απόλυτο σεβασμό στην ευαισθησία και τις ανάγκες σας, φροντίζουμε η εμπειρία σας μαζί μας να είναι πάντα ήρεμη, ανώδυνη και θετική.',

      /* ── contact.html — phone labels ─────────── */
      'contact.landline': 'τηλ. 210 931 2651',
      'contact.email': '1123alberto@gmail.com',

      /* ── Footer ───────────────────────────────── */
      'footer.address': 'Πλατεία Ντάβαρη 2, Παλαιό Φάληρο<br>τηλ. 210 931 2651',
      'footer.copyright': 'Copyright 2026. A. Moshopoulos Dental Implant Clinic. <br>All Rights Reserved.',

      /* ── Booking Modal ────────────────────────── */
      'bm.title': 'Κλείστε το Ραντεβού σας',
      'bm.subtitle': 'Επιλέξτε ημερομηνία και ώρα.',
      'bm.step2.back': '← Πίσω στο Ημερολόγιο',
      'bm.step3.back': '← Πίσω στις Ώρες',
      'bm.step3.title': 'Στοιχεία Επικοινωνίας',
      'bm.name.label': 'Ονοματεπώνυμο *',
      'bm.name.placeholder': 'π.χ. Μαρία Παπαδοπούλου',
      'bm.email.label': 'Email *',
      'bm.email.placeholder': 'maria@example.com',
      'bm.phone.label': 'Κινητό Τηλέφωνο *',
      'bm.phone.placeholder': '6930000000',
      'bm.services.heading': 'Ενδιαφέρομαι για...',
      'bm.svc.checkup': 'έλεγχο',
      'bm.svc.cleaning': 'καθαρισμό',
      'bm.svc.rootcanal': 'απονεύρωση',
      'bm.svc.cosmetic': 'αισθητική οδοντιατρική / λεύκανση',
      'bm.svc.dentures': 'οδοντοστοιχίες',
      'bm.svc.missing': 'ελλιπές ή σπασμένα δόντια',
      'bm.svc.wisdom': 'εξαγωγή φρονιμίτη',
      'bm.svc.implants': 'οδοντικά εμφυτεύματα',
      'bm.svc.other.ph': 'Άλλο',
      'bm.submit': 'Επιβεβαίωση Ραντεβού',
      'bm.step4.title': 'Το ραντεβού σας προστέθηκε!',
      'bm.step4.text': 'Θα λάβετε σύντομα ένα email επιβεβαίωσης. Σας περιμένουμε.',
      'bm.step4.new': 'Νέο Ραντεβού',

      /* ── booking.js dynamic ───────────────────── */
      'js.days': ['Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ', 'Κυρ'],
      'js.locale': 'el-GR',
      'js.saturday': 'Για ραντεβού το Σάββατο, παρακαλώ επικοινωνήστε μαζί μας τηλεφωνικά στο <a href="tel:2109312651" class="font-bold text-[#0284c7] hover:underline whitespace-nowrap">210 931 2651</a>.',
      'js.noslots': 'Δεν υπάρχουν διαθέσιμες ώρες για αυτή την ημερομηνία.',
      'js.error': 'Σφάλμα συστήματος. Παρακαλώ δοκιμάστε ξανά.',
      'js.noservice': 'Καμία υπηρεσία επιλεγμένη',
      'js.other': 'Άλλο',

      /* ── Management Portal ───────────────────── */
      'mg.title': 'Διαχείριση Ραντεβού',
      'mg.subtitle': 'Δείτε ή ακυρώστε την κράτησή σας.',
      'mg.loading': 'Αναζήτηση ραντεβού...',
      'mg.notfound': 'Το ραντεβού δεν βρέθηκε. Ελέγξτε αν το ραντεβού έχει ήδη ακυρωθεί ή αν το UID είναι σωστό.',
      'mg.appointment': 'Το Ραντεβού σας',
      'mg.cancel_btn': 'Ακύρωση Ραντεβού',
      'mg.reschedule_btn': 'Αλλαγή Ραντεβού',
      'mg.confirm_title': 'Επιβεβαίωση Ακύρωσης',
      'mg.confirm_text': 'Είστε σίγουροι ότι θέλετε να ακυρώσετε το ραντεβού σας; Αυτή η ενέργεια δεν αναιρείται.',
      'mg.confirm_yes': 'Ναι, Ακύρωση',
      'mg.confirm_no': 'Όχι, Πίσω',
      'mg.cancel_success': 'Το ραντεβού σας ακυρώθηκε επιτυχώς.',
      'mg.redirecting': 'Θα μεταφερθείτε στην αρχική σελίδα σε λίγα δευτερόλεπτα...',
    },

    en: {
      /* ── Navigation ───────────────────────────── */
      'nav.home': 'Home',
      'nav.doctor': 'The Dentist',
      'nav.services': 'Services',
      'nav.contact': 'Contact',

      /* ── Shared booking button ────────────────── */
      'booking.btn': 'Online Appointment',

      /* ── index.html — article cards ──────────── */
      'card1.title': 'Dental Implants: When Is the Right Time?',
      'card1.excerpt': 'Dental implants are the most reliable solution for tooth restoration. Discover when this exceptional option is ideal for you and your smile.',
      'card2.title': 'Mini Dental Implants',
      'card2.excerpt': 'Mini Implants are a modern, minimally invasive solution. Let us explore when they offer advantages over traditional implants.',
      'card3.title': 'Orthodontic Treatment',
      'card3.excerpt': 'Elevating both aesthetics and health. Orthodontics corrects tooth alignment, gifting you a harmonious, radiant, and healthy smile.',

      /* ── index.html — modal 2 (implants) ─────── */
      'modal2.title': 'When Is the Right Time for Dental Implants?',
      'modal2.p1': 'You may already know that dental implants are the most modern and effective way to replace missing or damaged teeth. But when exactly is the ideal moment to take this step?',
      'modal2.p2': '<span class="font-bold text-gray-900">To restore your facial aesthetics</span><br>The primary role of dental implants is to bring your smile back to its original splendour. Unlike bridges, they provide a permanent, highly natural structure that stands the test of time.',
      'modal2.p3': '<span class="font-bold text-gray-900">To protect and preserve jawbone density</span><br>Tooth loss can gradually lead to bone resorption and deterioration. Delaying implant placement risks losing the bone mass essential for future support.',
      'modal2.p4': 'For a personalised consultation and to learn how we can restore your smile, contact the <span class="text-brand-blue font-bold">Paleo Faliro Dental Clinic</span> today at 210 931-2651.',

      /* ── index.html — modal 3 (mini implants) ── */
      'modal3.title': 'Mini Dental Implants',
      'modal3.p1': 'A particularly popular trend in modern dentistry is choosing mini dental implants over traditional ones. Let us examine the benefits and potential limitations.',
      'modal3.p2': '<span class="font-bold text-gray-900">The Advantages</span><br>Mini implants are minimally invasive, require less placement time, and are often indicated for smaller spaces or patients with limited bone mass where conventional implants would not be viable.',
      'modal3.p3': '<span class="font-bold text-gray-900">What You Should Know</span><br>As a newer approach compared to conventional implants, long-term multi-decade studies on their durability in all conditions are still limited. Thorough diagnosis and 3D bone analysis are essential when planning treatment.',

      /* ── index.html — modal 4 (orthodontics) ─── */
      'modal4.title': 'The Role of Orthodontics',
      'modal4.p1': 'Orthodontics is the dental specialty focused on correcting the position of teeth and jaws, delivering functional restoration and aesthetic harmony.',
      'modal4.p2': '<span class="font-bold text-gray-900">Crooked teeth are not just an aesthetic issue:</span><br>1. They make proper cleaning difficult, increasing the risk of cavities and gingivitis.<br>2. They cause uneven force distribution during chewing, which can lead to premature wear.',
      'modal4.p3': '<span class="font-bold text-gray-900">Orthodontics in Implantology</span><br>In many cases involving missing teeth, orthodontic treatment precedes implant placement to create the proper space for safe positioning. Close collaboration between both specialities is essential for a perfect final result.',

      /* ── Quotes ───────────────────────────────── */
      'quote.index': '&quot; The health and functionality of your smile are our top priority.<br>In our state-of-the-art practice, we combine scientific excellence with a human touch. We welcome you to an environment where personalised care meets innovation. &quot;',
      'quote.about': '&quot; My goal is to bridge the gap between personalized, gentle care of a family practice and the complexities of surgery. Whether we are performing a surgical procedure or a routine check-up, our focus is always on the long-term well-being and confidence of our patients. &quot;',
      'quote.services': '&quot; We provide a full range of modern dental treatments, each one tailored to what you actually need.<br>Backed by the latest technology and years of hands-on expertise, we aim for results that look natural and last. Your oral health drives every decision we make. &quot;',
      'quote.contact': '&quot; We are always at your disposal to listen to your needs and address any questions you may have.<br>Contact us today to schedule your next visit to our practice. We look forward to welcoming you. &quot;',

      /* ── about.html — biography ───────────────── */
      'about.p1': 'With a career spanning over two decades and two continents, Dr. Angelo Moschopoulos brings a rare depth of scientific knowledge and clinical precision to the field of restorative and implant dentistry. His approach combines the rigorous discipline of biological research with the artistry of modern dental aesthetics, ensuring that every patient receives care that is as functional as it is beautiful.',
      'about.p2': 'Dr. Moshopoulos’s journey began at McGill University in Montreal, where he earned his Bachelor of Science in 1992, specializing in Microbiology and Immunology. This deep understanding of the biological foundations of human health remains a cornerstone of his practice today.',
      'about.p3': 'Following his undergraduate studies, he dedicated two years to high-level research at the Hellenic Pasteur Institute, contributing to the advancement of medical science before transitioning his focus to clinical dentistry. He earned his Doctor of Dental Medicine from Semmelweis University in 1999, blending his background in bioscience with advanced dental surgery.',
      'about.p4': 'Since 2002, Dr. Moshopoulos has served the southern suburbs of Athens through his private practice in Paleo Faliro. His clinical expertise is further bolstered by his longstanding role in the Department of Oral and Maxillofacial Surgery at Metropolitan Hospital, a position he has held since 2003. This dual role in both private practice and a major hospital environment allows him to stay at the forefront of surgical innovations, with a specific emphasis on:<ul class="list-disc ml-6 mt-4 space-y-2"><li><strong>Functional Rehabilitation:</strong> Restoring the full power of the bite and oral health.</li><li><strong>Aesthetic Integration:</strong> Ensuring dental work complements the natural features of the patient.</li><li><strong>Precision Implant Placement:</strong> Utilizing the latest techniques for long-term stability.</li></ul>',
      'about.p5': 'Beyond his clinical achievements, Dr. Moshopoulos is deeply invested in the health of the Paleo Faliro community. In 2001, he was instrumental in establishing the Dental Clinic at the Municipal Medical Center of Paleo Faliro.',
      'about.p6': 'Since then he has volunteered his time providing essential preventive dental care to local school children. This dedication to public health was formally recognized in 2015, when he was honored at a joint ceremony hosted by the Municipalities of Paleo Faliro and Piraeus for his distinguished volunteer service.',

      /* ── services.html ────────────────────────── */
      'services.p1': 'At our practice, we believe that exceptional dentistry is built on a foundation of trust and meticulous planning. Our core philosophy is simple: your long-term oral health is our primary metric of success. We eschew transient solutions in favor of comprehensive treatment protocols. This means every procedure is backed by thorough diagnostic planning, education regarding daily hygiene, and an unwavering commitment to preventive care. We don\'t just restore teeth; we protect your future health.',
      'services.p2': 'A beautiful smile is only as strong as the structures supporting it. To ensure the highest success rates for restorative and cosmetic work, we follow a strictly phased approach to care:<ul class="list-none space-y-6 mt-6"><li><strong class="text-gray-900">Phase I: Stabilization & Prevention</strong><div class="mt-2">Every journey begins with a comprehensive assessment and professional cleaning. We prioritize the health of your supporting tissues, addressing periodontal (gum) health and early-stage decay before proceeding to advanced treatments.</div></li><li><strong class="text-gray-900">Phase II: Restorative Excellence</strong><div class="mt-2">Once a healthy foundation is established, we move toward specialized interventions. From precision fillings to complex implant placement, our procedures are performed with a focus on structural durability and aesthetic harmony.</div></li><li><strong class="text-gray-900">Phase III: Maintenance & Education</strong><div class="mt-2">We empower our patients with the knowledge and tools necessary to maintain their results at home, ensuring that your investment in your smile lasts for a lifetime.</div></li></ul>',
      'services.p3': 'We understand that for many, a visit to the dentist can be a source of apprehension. We have intentionally designed our practice to redefine that experience, blending clinical professionalism with a welcoming, stress-free environment.<div class="mt-10 space-y-6"><div class="font-bold text-xl text-gray-900 mb-4">Why Choose Our Practice?</div><ul class="list-none space-y-6"><li><strong class="text-gray-900">A Calming Environment:</strong><div class="mt-2">Our clinic is designed to be a tranquil space where you can feel at ease from the moment you arrive.</div></li><li><strong class="text-gray-900">A Compassionate Team:</strong><div class="mt-2">Our staff is specifically trained to support patients with dental anxiety, offering a gentle touch and clear communication at every step.</div></li><li><strong class="text-gray-900">Modern Convenience:</strong><div class="mt-2">We respect your time. To accommodate busy professional and family schedules, we offer flexible appointment times, including Saturday availability.</div></li></ul></div>',

      /* ── contact.html — phone labels ─────────── */
      'contact.landline': 'tel. 210 931 2651',
      'contact.email': '1123alberto@gmail.com',

      /* ── Footer ───────────────────────────────── */
      'footer.address': 'Plateia Ntavari 2, Paleo Faliro<br>tel. 210 931 2651',
      'footer.copyright': 'Copyright 2026. A. Moshopoulos Dental Implant Clinic. <br>All Rights Reserved.',

      /* ── Booking Modal ────────────────────────── */
      'bm.title': 'Book Your Appointment',
      'bm.subtitle': 'Select a date and time.',
      'bm.step2.back': '← Back to Calendar',
      'bm.step3.back': '← Back to Time Slots',
      'bm.step3.title': 'Contact Details',
      'bm.name.label': 'Full Name *',
      'bm.name.placeholder': 'e.g. Maria Papadopoulou',
      'bm.email.label': 'Email *',
      'bm.email.placeholder': 'maria@example.com',
      'bm.phone.label': 'Mobile Phone *',
      'bm.phone.placeholder': '6930000000',
      'bm.services.heading': 'I am interested in...',
      'bm.svc.checkup': 'check-up',
      'bm.svc.cleaning': 'cleaning',
      'bm.svc.rootcanal': 'root canal',
      'bm.svc.cosmetic': 'cosmetic dentistry / whitening',
      'bm.svc.dentures': 'dentures',
      'bm.svc.missing': 'missing or broken teeth',
      'bm.svc.wisdom': 'wisdom tooth extraction',
      'bm.svc.implants': 'dental implants',
      'bm.svc.other.ph': 'Other',
      'bm.submit': 'Confirm Appointment',
      'bm.step4.title': 'Your appointment is confirmed!',
      'bm.step4.text': 'You will receive a confirmation email shortly. We look forward to seeing you.',
      'bm.step4.new': 'New Appointment',

      /* ── booking.js dynamic ───────────────────── */
      'js.days': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      'js.locale': 'en-GB',
      'js.saturday': 'For Saturday appointments, please contact us by phone at <a href="tel:2109312651" class="font-bold text-[#0284c7] hover:underline whitespace-nowrap">210 931 2651</a>.',
      'js.noslots': 'No available time slots for this date.',
      'js.error': 'System error. Please try again.',
      'js.noservice': 'No service selected',
      'js.other': 'Other',

      /* ── Management Portal ───────────────────── */
      'mg.title': 'Manage Appointment',
      'mg.subtitle': 'View or cancel your booking.',
      'mg.loading': 'Searching for appointment...',
      'mg.notfound': 'Appointment not found. Please check if it was already cancelled or if the link is correct.',
      'mg.appointment': 'Your Appointment',
      'mg.cancel_btn': 'Cancel Appointment',
      'mg.reschedule_btn': 'Reschedule',
      'mg.confirm_title': 'Confirm Cancellation',
      'mg.confirm_text': 'Are you sure you want to cancel your appointment? This action cannot be undone.',
      'mg.confirm_yes': 'Yes, Cancel',
      'mg.confirm_no': 'No, Go Back',
      'mg.cancel_success': 'Your appointment has been successfully cancelled.',
      'mg.redirecting': 'Redirecting to home page in a few seconds...',
    }
  };

  let currentLang = localStorage.getItem('lang') || 'el';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* Toggle button shows the other language as the switch target */
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'el' ? 'EN' : 'EL';
    });

    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function toggleLanguage() {
    applyLanguage(currentLang === 'el' ? 'en' : 'el');
  }

  function getCurrentLang() { return currentLang; }

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key] !== undefined)
      ? translations[currentLang][key]
      : (translations['el'][key] || key);
  }

  document.addEventListener('DOMContentLoaded', () => applyLanguage(currentLang));

  window.i18n = { applyLanguage, toggleLanguage, getCurrentLang, t, translations };
})();
