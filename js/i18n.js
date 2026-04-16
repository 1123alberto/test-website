/* ============================================================
   i18n.js — Bilingual translation engine (EL primary / EN)
   ============================================================ */
(function () {

  const translations = {
    el: {
    'title.home': 'Οδοντικά Εμφυτεύματα | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.about': 'Χειρουργός Οδοντίατρος | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.services': 'Οδοντιατρικές Υπηρεσίες | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.contact': 'Επικοινωνία & Τοποθεσία | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.booking': 'Online Ραντεβού | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.privacy': 'Πολιτική Απορρήτου | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.manage': 'Διαχείριση Ραντεβού | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'title.faq': 'Συχνές Ερωτήσεις | Παλαιό Φάληρο | Άγγελος Μοσχόπουλος',
    'desc.home': 'Εξειδικευμένη κλινική για οδοντικά εμφυτεύματα στο Παλαιό Φάληρο. Αποκαταστήστε το χαμόγελό σας με σύγχρονες τεχνικές από τον Άγγελο Μοσχόπουλο. Κλείστε ραντεβού!',
    'desc.about': 'Γνωρίστε τον Άγγελο Μοσχόπουλο, έμπειρο χειρουργό οδοντίατρο στο Παλαιό Φάληρο. Εξειδίκευση στα οδοντικά εμφυτεύματα και την αισθητική οδοντιατρική. Δείτε το βιογραφικό.',
    'desc.services': 'Ολοκληρωμένες οδοντιατρικές υπηρεσίες στο Παλαιό Φάληρο: Εμφυτεύματα, αισθητική οδοντιατρική & πρόληψη. Ενημερωθείτε για όλες τις λύσεις μας. Κλείστε ραντεβού!',
    'desc.contact': 'Επικοινωνήστε με την κλινική Dentplant στο Παλαιό Φάληρο. Βρείτε μας στην Πλατεία Ντάβαρη 2 ή καλέστε στο 210 9312651 για το ραντεβού σας. Σας περιμένουμε από κοντά!',
    'desc.booking': 'Κλείστε το οδοντιατρικό σας ραντεβού online εύκολα και γρήγορα. Επιλέξτε την ημέρα και την ώρα που σας εξυπηρετεί στην κλινική μας στο Παλαιό Φάληρο. Σας περιμένουμε!',
    'desc.privacy': 'Πολιτική Απορρήτου της Dentplant Clinic στο Παλαιό Φάληρο. Μάθετε πώς προστατεύουμε τα προσωπικά σας δεδομένα σε συμμόρφωση με τον ΓΚΠΔ (GDPR) και την ελληνική νομοθεσία.',
    'desc.manage': 'Διαχειριστείτε το οδοντιατρικό σας ραντεβού στην κλινική Dentplant. Δείτε τις λεπτομέρειες, αλλάξτε την ημερομηνία ή ακυρώστε το ραντεβού σας εύκολα και γρήγορα online.',
    'desc.faq': 'Συχνές ερωτήσεις για οδοντικά εμφυτεύματα: κόστος, πόνος, διάρκεια και εγγύηση. Ενημερωθείτε υπεύθυνα από την κλινική μας στο Παλαιό Φάληρο.',
      /* ── Navigation ───────────────────────────── */
      'nav.home': 'Αρχικη',
      'nav.doctor': 'Ο Ιατρος',
      'nav.services': 'Υπηρεσιες',
      'nav.contact': 'Επικοινωνια',
      'nav.faq': 'ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ',

      /* ── Hero / Standalone Header ──────────────── */
      'hero.name': 'Άγγελος Μοσχόπουλος',
      'hero.title': 'Κλινική Οδοντικών Εμφυτευμάτων',

      /* ── Shared booking button ────────────────── */
      'booking.btn': 'Ηλεκτρονικη Κρατηση',

      /* ── index.html — article cards ──────────── */
      'card1.title': 'Είμαι κατάλληλος υποψήφιος για οδοντικά εμφυτεύματα;',
      'card1.excerpt': 'Οι περισσότεροι ενήλικες που έχουν χάσει ένα ή περισσότερα δόντια είναι κατάλληλοι για εμφυτεύματα. Τα υγιή ούλα και η επαρκής οστική μάζα αποτελούν τους βασικούς παράγοντες επιτυχίας.',
      'card2.title': 'Από τη Διάγνωση στην Ολοκλήρωση: Κατανοώντας τη Διαδικασία',
      'card2.excerpt': 'Η διαδικασία τοποθέτησης εμφυτεύματος είναι ξεκάθαρη αλλά απαιτεί χρόνο. Από την αρχική ενημέρωση μέχρι την τοποθέτηση της στεφάνης, η διαδρομή διαρκεί συνήθως 3-6 μήνες.',
      'card3.title': 'Εμφυτεύματα, Γέφυρες ή Τεχνητές Οδοντοστοιχίες',
      'card3.excerpt': 'Τα οδοντικά εμφυτεύματα υπερτερούν σαφώς. Προστατεύουν το οστό της γνάθου και δεν απαιτούν τρόχισμα των διπλανών δοντιών, προσφέροντας την πιο φυσική λύση.',
      'card4.title': 'Οστικό Μόσχευμα και Εμφυτεύματα',
      'card4.excerpt': 'Η έλλειψη οστικής μάζας σπάνια αποτελεί οριστικό πρόβλημα. Η τοποθέτηση οστικού μοσχεύματος είναι πλέον μια διαδικασία ρουτίνας που δημιουργεί το απαραίτητο θεμέλιο.',
      'card5.title': 'Πόσο κοστίζουν πραγματικά τα οδοντικά εμφυτεύματα;',
      'card5.excerpt': 'Τα εμφυτεύματα έχουν μεγαλύτερο αρχικό κόστος, αλλά η αντοχή τους στον χρόνο τα καθιστά την πιο συμφέρουσα και ποιοτική λύση για το μέλλον.',
      'card6.title': 'Οδοντικά Εμφυτεύματα με Μέθη: Χωρίς άγχος',
      'card6.excerpt': 'Το οδοντιατρικό άγχος είναι φυσιολογικό, αλλά η σύγχρονη "μέθη" καθιστά τη διαδικασία των εμφυτευμάτων πολύ πιο άνετη και ανώδυνη από όσο φαντάζεστε.',

      /* ── index.html — modal 2 (Candidate) ─────── */
      'modal2.title': 'Είμαι κατάλληλος υποψήφιος για οδοντικά εμφυτεύματα; Όλα όσα πρέπει να γνωρίζετε',
      'modal2.p1': 'Οι περισσότεροι ενήλικες που έχουν χάσει ένα ή περισσότερα δόντια είναι εξαιρετικοί υποψήφιοι για οδοντικά εμφυτεύματα. Οι βασικοί παράγοντες που καθορίζουν την καταλληλότητα είναι η υγεία των ούλων και η επαρκής οστική μάζα στη γνάθο για τη στήριξη του εμφυτεύματος.',
      'modal2.p2': 'Καταστάσεις όπως ο διαβήτης ή το ιστορικό καπνίσματος δεν σας αποκλείουν απαραίτητα — απλώς απαιτούν μια πιο προσεκτική αξιολόηση και προετοιμασία από την ομάδα μας.',
      'modal2.p3': '<span class="font-bold text-gray-900">Τι γίνεται αν έχω χάσει οστό;</span><br>Αν σας έχουν πει στο παρελθόν ότι έχετε χάσει πολύ οστό, μην ανησυχείτε. Η τοποθέτηση οστικού μοσχεύματος μπορεί συχνά να αποκαταστήσει το θεμέλιο που απαιτείται για ένα επιτυχημένο εμφύτευμα.',
      'modal2.p4': 'Ο καλύτερος τρόπος για να μάθετε με σιγουριά είναι μια απλή διαγνωστική επίσκεψη. Η ομάδα μας θα αξιολογήσει το ιστορικό σας, θα λάβει ένα 3D scan και θα σας δώσει μια ξεκάθαρη και ειλικρινή απάντηση. Οι περισσότεροι ασθενείς εκπλήσσονται ευχάριστα όταν μαθαίνουν ότι πληρούν τις προϋποθέσεις.',

      /* ── index.html — modal 3 (Timeline) ── */
      'modal3.title': 'Από τη Διάγνωση στην Ολοκλήρωση: Κατανοώντας τη Διαδικασία',
      'modal3.p1': 'Η διαδικασία των εμφυτευμάτων είναι μια καλά σχεδιασμένη διαδρομή που απαιτεί χρόνο για να διασφαλιστεί η μόνιμη σταθερότητα. Ας δούμε τα βασικά βήματα:',
      'modal3.p2': '<span class="font-bold text-gray-900">1. Διάγνωση & Σχεδιασμός:</span> Αξιολογούμε την κατάσταση των δοντιών, των ούλων και του οστού σας, δημιουργώντας ένα απόλυτα εξατομικευμένο πλάνο θεραπείας.',
      'modal3.p3': '<span class="font-bold text-gray-900">2. Τοποθέτηση Εμφυτεύματος:</span> Ένας μικρός πείρος τιτανίου τοποθετείται στη γνάθο με τοπική αναισθησία. Οι περισσότεροι ασθενείς αναφέρουν ελάχιστη έως καθόλου ενόχληση μετά τη διαδικασία.',
      'modal3.p4': '<span class="font-bold text-gray-900">3. Επούλωση (Οστεοενσωμάτωση):</span> Κατά τη διάρκεια 2–4 μηνών, το εμφύτευμα ενσωματώνεται φυσικά με το οστό, δημιουργώντας μια σταθερή και μόνιμη βάση.',
      'modal3.p5': '<span class="font-bold text-gray-900">4. Τοποθέτηση Στεφάνης:</span> Μόλις ολοκληρωθεί η επούλωση, τοποθετείται η τελική στεφάνη (θήκη). Το αποτέλεσμα μοιάζει, έχει την αίσθηση και λειτουργεί ακριβώς όπως ένα φυσικό δόντι.',
      'modal3.p6': 'Από την αρχή μέχρι το τέλος, η διαδικασία διαρκεί συνήθως 3–6 μήνες — το αποτέλεσμα όμως είναι σχεδιασμένο να διαρκέσει μια ζωή.',

      /* ── index.html — modal 4 (Comparison) ─── */
      'modal4.title': 'Εμφυτεύματα, Γέφυρες ή Τεχνητές Οδοντοστοιχίες: Ποιο είναι το σωστό για εσάς;',
      'modal4.p1': 'Όταν πρόκειται για την αντικατάσταση δοντιών, έχετε τρεις κύριες επιλογές — οι οποίες όμως δεν είναι ισότιμες μεταξύ τους.',
      'modal4.p2': '<span class="font-bold text-gray-900">Οι Τεχνητές Οδοντοστοιχίες (μασέλες)</span> είναι αφαιρούμενες και οικονομικές, αλλά μπορεί να μετακινούνται, να προκαλούν δυσφορία και δεν εμποδίζουν την απώλεια οστού στη γνάθο με την πάροδο του χρόνου.',
      'modal4.p3': '<span class="font-bold text-gray-900">Οι Γέφυρες</span> είναι σταθερές και φαίνονται φυσικές, απαιτούν όμως το τρόχισμα υγιών γειτονικών δοντιών για να λειτουργήσουν ως στηρίγματα — ένας μόνιμος συμβιβασμός για τα υγιή σας δόντια.',
      'modal4.p4': '<span class="font-bold text-gray-900">Τα Οδοντικά Εμφυτεύματα</span> αποτελούν την κορυφαία λύση. Αντικαθιστούν τη ρίζα καθώς και το δόντι, διατηρούν το οστό της γνάθου σας και δεν επηρεάζουν τα γύρω δόντια. Είναι ό,τι πιο κοντινό σε ένα φυσικό δόντι προσφέρει η σύγχρονη οδοντιατρική.',
      'modal4.p5': 'Για τους περισσότερους ασθενείς, τα εμφυτεύματα αποτελούν την πιο έξυπνη μακροπρόθεσμη επένδυση για το χαμόγελο και τη στοματική τους υγεία.',

      /* ── index.html — modal 5 (Bone Grafting) ─── */
      'modal5.title': 'Οστικό Μόσχευμα και Εμφυτεύματα: Γιατί η απώλεια οστού δεν αποτελεί εμπόδιο',
      'modal5.p1': 'Ένας συνηθισμένος λόγος που ορισμένοι ασθενείς πιστεύουν ότι δεν μπορούν να βάλουν εμφυτεύματα είναι η έλλειψη οστού. Όταν ένα δόντι χάνεται, το οστό της γνάθου κάτω από αυτό σταδιακά συρρικνώνεται.',
      'modal5.p2': 'Αυτό όμως σπάνια σημαίνει το τέλος της προσπάθειας. Η τοποθέτηση οστικού μοσχεύματος είναι μια διαδικασία ρουτίνας που "χτίζει" ξανά το χαμένο οστό χρησιμοποιώντας φυσικά ή συνθετικά υλικά.',
      'modal5.p3': 'Μόλις το μόσχευμα ενσωματωθεί —συνήθως μέσα σε λίγους μήνες— η περιοχή είναι έτοιμη να υποστηρίξει ένα εμφύτευμα με την ίδια ασφάλεια όπως κάθε άλλη. Πολλοί από τους ασθενείς μας που αρχικά είχαν λάβει αρνητική απάντηση αλλού, απέκτησαν επιτυχημένα εμφυτεύματα μετά από μια διαδικασία ανάπλασης οστού.',

      /* ── index.html — modal 6 (Cost) ─── */
      'modal6.title': 'Πόσο κοστίζουν πραγματικά τα οδοντικά εμφυτεύματα;',
      'modal6.p1': 'Τα οδοντικά εμφυτεύματα έχουν ένα υψηλότερο αρχικό κόστος σε σύγκριση με άλλες επιλογές. Ωστόσο, στην πραγματικότητα, αποτελούν σχεδόν πάντα την πιο οικονομική λύση σε βάθος χρόνου.',
      'modal6.p2': 'Οι τεχνητές οδοντοστοιχίες και οι γέφυρες συχνά χρειάζονται αντικατάσταση, επισκευή ή προσαρμογή με το πέρασμα των ετών. Τα εμφυτεύματα, με τη σωστή φροντίδα, διαρκούν για δεκαετίες — συχνά για μια ολόκληρη ζωή.',
      'modal6.p3': 'Πέρα από το οικονομικό σκέλος, σκεφτείτε την ποιότητα ζωής: τα εμφυτεύματα σας επιτρέπουν να τρώτε, να μιλάτε και να χαμογελάτε με απόλυτη αυτοπεποίθηση, χωρίς την ανησυχία μετακινήσεων ή ενοχλήσεων.',

      /* ── index.html — modal 7 (Sedation) ─── */
      'modal7.title': 'Οδοντικά Εμφυτεύματα με Μέθη: Μια εμπειρία χωρίς στρες',
      'modal7.p1': 'Το οδοντιατρικό άγχος είναι απίστευτα συνηθισμένο και απόλυτα κατανοητό. Τα ευχάριστα νέα είναι ότι η χειρουργική τοποθέτηση εμφυτευμάτων σήμερα είναι πολύ πιο άνετη από ό,τι περιμένουν οι περισσότεροι ασθενείς.',
      'modal7.p2': 'Προσφέρουμε επιλογές "μέθης" (καταστολής) προσαρμοσμένες στο δικό σας επίπεδο άγχους. Είτε προτιμάτε μια ελαφριά χαλάρωση είτε μια βαθύτερη καταστολή (IV sedation), θα διασφαλίσουμε ότι αισθάνεστε απόλυτα ασφαλείς και ήρεμοι καθ’ όλη τη διάρκεια.',
      'modal7.p3': 'Οι περισσότεροι ασθενείς εκπλήσσονται από το πόσο λίγο αισθάνονται και το πόσο γρήγορα τελειώνει η διαδικασία. Η ίδια η επέμβαση πραγματοποιείται με τοπική αναισθησία, που σημαίνει ότι δεν υπάρχει πόνος κατά τη διάρκεια του χειρουργείου.',
      'modal7.p4': 'Αν ο φόβος σας εμποδίζει από το να αποκτήσετε το χαμόγελο που σας αξίζει, ας το συζητήσουμε. Μια εμπειρία χωρίς άγχος ξεκινά με μια απλή κουβέντα.',


      /* ── Quotes ───────────────────────────────── */
      'quote.index': '&quot; Η υγεία και η λειτουργικότητα του χαμόγελού σας αποτελούν για εμάς κορυφαία προτεραιότητα.<br>Στο υπερσύγχρονο ιατρείο μας, συνδυάζουμε την επιστημονική αρτιότητα με την ανθρώπινη προσέγγιση. Σας καλωσορίζουμε σε ένα περιβάλλον όπου η προσωπική φροντίδα συναντά την καινοτομία. &quot;',
      'quote.about': '&quot; Η αφοσίωσή μας στην επιστήμη της οδοντιατρικής μεταφράζεται σε εξατομικευμένη και ουσιαστική φροντίδα για κάθε ασθενή. <br>Με οδηγό τη συνεχή εξέλιξη και το σεβασμό στις ανάγκες σας, χτίζουμε σχέσεις εμπιστοσύνης που διαρκούν. Αποτελεί τιμή μας να αναλαμβάνουμε τη φροντίδα του χαμόγελού σας. &quot;',
      'quote.services': '&quot; Προσφέρουμε ένα πλήρες φάσμα σύγχρονων οδοντιατρικών θεραπειών, καθεμία από τις οποίες είναι προσαρμοσμένη στις πραγματικές σας ανάγκες.<br>Με την υποστήριξη της τελευταίας λέξης της τεχνολογίας και πολυετή εμπειρία, στοχεύουμε σε αποτελέσματα που φαίνονται φυσικά και αντέχουν στον χρόνο. Κάθε μας απόφαση οδηγείται από τη δική σας στοματική υγεία. &quot;',

      /* ── about.html — biography sections ──────── */
      'about.p1': 'Με βαθιά αφοσίωση στην επιστήμη και τον άνθρωπο, ο <strong class="text-gray-900">Άγγελος Μοσχόπουλος</strong> ξεκίνησε την ακαδημαϊκή του πορεία στο Πανεπιστήμιο McGill, ολοκληρώνοντας το 1992 τις σπουδές του στη Βιολογία, με εξειδίκευση στη Μικροβιολογία και την Ανοσολογία.',
      'about.p2': 'Η αγάπη του για την έρευνα τον οδήγησε στο Ελληνικό Ινστιτούτο Παστέρ, όπου εργάστηκε ως ερευνητής για δύο χρόνια, προτού αφοσιωθεί στην Οδοντιατρική, λαμβάνοντας το πτυχίο του από το Πανεπιστήμιο Semmelweis το 1999.',
      'about.p3': 'Ο Άγγελος Μοσχόπουλος ασκεί την οδοντιατρική στα νότια προάστια από το 2002, καλωσορίζοντας τους ασθενείς του στην προσωπική του κλινική εμφυτευμάτων στο Παλαιό Φάληρο. Παράλληλα, από το 2003 αποτελεί Επιστημονικό Σύμβουλο στο τμήμα Στοματικής και Γναθοπροσωπικής Χειρουργικής του Νοσοκομείου Metropolitan.',
      'about.p4': 'Εκεί έχει αναπτύξει υψηλή εξειδίκευση και εμπειρία στις θεραπείες με οδοντικά εμφυτεύματα, δίνοντας ιδιαίτερη έμφαση στην άρτια διαχείριση και την πλήρη αισθητική και λειτουργική αποκατάσταση του χαμόγελου.',
      'about.p5': 'Με όραμα την προσφορά στην κοινωνία, το 2001 συνέβαλε καθοριστικά στην ίδρυση της Οδοντιατρικής Κλινικής των Δημοτικών Ιατρείων Παλαιού Φαλήρου.',
      'about.p6': 'Εδώ και περισσότερες από δύο δεκαετίες, φροντίζει με χαρά και υπευθυνότητα την προληπτική οδοντιατρική των παιδιών του δήμου. Η πολύτιμη εθελοντική του δράση τιμήθηκε το 2015 σε ειδική τελετή από τους Δήμους Παλαιού Φαλήρου και Πειραιά.',

      /* ── services.html ────────────────────────── */
      'services.p1': 'Στο επίκεντρο της φιλοσοφίας μας βρίσκεται η ευημερία και το χαμόγελο κάθε ασθενούς. Πιστεύουμε ακράδαντα πως ο προσεκτικός σχεδιασμός της θεραπείας, η συστηματική εκπαίδευση στη σωστή στοματική υγιεινή και η προληπτική φροντίδα αποτελούν τα ισχυρότερα θεμέλια για υγιείς και ανθεκτικές αποκαταστάσεις που αντέχουν στον χρόνο.',
      'services.p2': 'Το ταξίδι προς ένα τέλειο χαμόγελο ξεκινά πάντα από ένα υγιές θεμέλιο. Μέσα από σχολαστικό καθαρισμό, άμεση αντιμετώπιση της τερηδόνας και στοχευμένες θεραπείες, διασφαλίζουμε την ιδανική κατάσταση της στοματικής κοιλότητας. Μόνο τότε προχωράμε με σιγουριά και ασφάλεια στο επόμενο στάδιο της αποκατάστασης των δοντιών μέσω της σύγχρονης εμφυτευματολογίας.',
      'services.p3': 'Γνωρίζοντας πως η επίσκεψη στον οδοντίατρο μπορεί να προκαλεί άγχος, έχουμε διαμορφούμε έναν χώρο ζεστό, φιλόξενο και απόλυτα άνετο. Με εύκολη πρόσβαση, μεγάλη ευελιξία στα ραντεβού και πρωταρχικό μας μέλημα τον απόλυτο σεβασμό στην ευαισθησία και τις ανάγκες σας, φροντίζουμε η εμπειρία σας μαζί μας να είναι πάντα ήρεμη, ανώδυνη και θετική.',

      /* ── contact.html — phone labels ─────────── */
      'contact.landline': 'τηλ. 210 931 2651',
      'contact.address.l1': 'Πλατεία Ντάβαρη 2',
      'contact.address.l2': 'Παλαιό Φάληρο',
      'contact.address.l3': '17564',

      /* ── Footer ───────────────────────────────── */
      'footer.address': 'Πλατεία Ντάβαρη 2, Παλαιό Φάληρο<br>τηλ. 210 931 2651',
      'footer.copyright': 'Copyright 2026. Dentplant Clinic. <br>All Rights Reserved.',
      'footer.disclaimer': 'Η ενημέρωση σε αυτόν τον ιστότοπο παρέχεται αποκλειστικά για εκπαιδευτικούς σκοπούς και δεν υποκαθιστά την επαγγελματική ιατρική συμβουλή.',
      'footer.membership': 'Μέλος του Οδοντιατρικού Συλλόγου Πειραιά',
      'footer.medical_review': 'Ελέγχθηκε ιατρικά από τον Άγγελο Μοσχόπουλο, DDS | Ενημέρωση: Απρίλιος 2026',
      'footer.privacy': 'Πολιτική Απορρήτου',

      /* ── privacy.html ─────────────────────────── */
      'privacy.title': 'Πολιτική Απορρήτου',
      'privacy.body': `<p><strong>Τελευταία ενημέρωση: 13 Απριλίου 2026</strong></p>
      <p>Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο η Dentplant Clinic συλλέγει, χρησιμοποιεί, αποθηκεύει και προστατεύει τα προσωπικά σας δεδομένα όταν επισκέπτεστε τους ιστότοπούς μας (dentplant.gr) ή κάνετε χρήση των οδοντιατρικών μας υπηρεσιών. Έχει συνταχθεί σε συμμόρφωση με τον Γενικό Κανονισμό Προστασίας Δεδομένων (ΕΕ) 2016/679 (ΓΚΠΔ/GDPR) και τον Ελληνικό Νόμο 4624/2019.</p>
      <p>Παρακαλούμε να διαβάσετε προσεκτικά την παρούσα Πολιτική. Με τη χρήση των ιστοτόπων μας ή την πραγματοποίηση ραντεβού, αναγνωρίζετε ότι έχετε διαβάσει και κατανοήσει τον τρόπο με τον οποίο διαχειριζόμαστε τα προσωπικά σας δεδομένα.</p>

      <h2>1. Υπεύθυνος Επεξεργασίας</h2>
      <p>Υπεύθυνος επεξεργασίας των προσωπικών σας δεδομένων είναι:</p>
      <table>
        <tr><th>Επωνυμία</th><td>Dentplant Clinic</td></tr>
        <tr><th>Ιστότοποι</th><td>dentplant.gr / i-smile.gr</td></tr>
        <tr><th>Διεύθυνση</th><td>Πλατεία Νταβάρη 2, Παλαιό Φάληρο, 17564, Ελλάδα</td></tr>
        <tr><th>Email</th><td>info@dentplant.gr / info@i-smile.gr</td></tr>
        <tr><th>Τηλέφωνο</th><td>+30 210 9312651</td></tr>
        <tr><th>ΑΦΜ</th><td>077118016</td></tr>
      </table>

      <h2>2. Ποια Προσωπικά Δεδομένα Συλλέγουμε</h2>
      <h3>2.1 Επισκέπτες Ιστοτόπου</h3>
      <ul>
        <li>Διεύθυνση IP και κατά προσέγγιση γεωγραφική τοποθεσία</li>
        <li>Τύπο και έκδοση προγράμματος περιήγησης (browser) και λειτουργικό σύστημα</li>
        <li>Σελίδες που επισκεφθήκατε, χρόνο παραμονής και διαδρομή πλοήγησης</li>
        <li>Ιστότοπο παραπομπής ή αναζητούμενο όρο</li>
      </ul>
      <h3>2.2 Φόρμες Κρατήσεων και Επικοινωνίας</h3>
      <ul>
        <li>Ονοματεπώνυμο</li>
        <li>Διεύθυνση ηλεκτρονικού ταχυδρομείου</li>
        <li>Αριθμό τηλεφώνου</li>
        <li>Προτιμώμενη ημερομηνία και ώρα ραντεβού</li>
        <li>Οποιοδήποτε μήνυμα ή σχόλιο επιθυμείτε να συμπεριλάβετε</li>
      </ul>
      <h3>2.3 Ασθενείς (Ιατρικά / Δεδομένα Υγείας)</h3>
      <p>Στο πλαίσιο παροχής οδοντιατρικής περίθαλψης, συλλέγουμε και επεξεργαζόμαστε δεδομένα ειδικής κατηγορίας (ευαίσθητα δεδομένα υγείας), όπως:</p>
      <ul>
        <li>Ιατρικό και οδοντιατρικό ιστορικό</li>
        <li>Ακτινογραφίες και κλινικές φωτογραφίες</li>
        <li>Θεραπευτικά σχέδια, εκτελεσθείσες πράξεις και κλινικές σημειώσεις</li>
        <li>Πληροφορίες για φαρμακευτική αγωγή και αλλεργίες</li>
        <li>Έντυπα συναίνεσης και υπογεγραμμένες εξουσιοδοτήσεις</li>
      </ul>

      <h2>3. Νομική Βάση Επεξεργασίας</h2>
      <ul>
        <li><strong>Εκτέλεση σύμβασης:</strong> για την παροχή οδοντιατρικής θεραπείας και τη διαχείριση των ραντεβού σας.</li>
        <li><strong>Συμμόρφωση με έννομη υποχρέωση:</strong> για την τήρηση των υποχρεώσεων φύλαξης ιατρικών αρχείων βάσει της ελληνικής νομοθεσίας.</li>
        <li><strong>Έννομο συμφέρον:</strong> για στατιστική ανάλυση επισκεψιμότητας και βελτίωση της λειτουργίας των ιστοτόπων μας.</li>
        <li><strong>Ρητή συγκατάθεση:</strong> για την επεξεργασία δεδομένων υγείας και για τη χρήση φωτογραφιών πριν και μετά τη θεραπεία σε διαφημιστικό πλαίσιο.</li>
      </ul>

      <h2>4. Πώς Χρησιμοποιούμε τα Δεδομένα σας</h2>
      <ul>
        <li>Τον προγραμματισμό, επιβεβαίωση και διαχείριση οδοντιατρικών ραντεβού</li>
        <li>Την παροχή ασφαλούς και αποτελεσματικής οδοντιατρικής θεραπείας</li>
        <li>Την αποστολή υπενθυμίσεων ραντεβού μέσω SMS ή ηλεκτρονικού ταχυδρομείου</li>
        <li>Την τήρηση και ενημέρωση του ατομικού ιατρικού σας φακέλου</li>
        <li>Την απάντηση σε ερωτήματα που υποβάλλονται μέσω των ιστοτόπων μας</li>
      </ul>

      <h2>5. Cookies και Τεχνολογίες Παρακολούθησης</h2>
      <p>Οι ιστότοποί μας χρησιμοποιούν cookies. Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies ανά πάσα στιγμή μέσω των ρυθμίσεων του προγράμματος περιήγησής σας.</p>

      <h2>6. Αποδέκτες των Δεδομένων σας</h2>
      <ul>
        <li><strong>Οδοντοτεχνικά εργαστήρια:</strong> για την κατασκευή οδοντικών προσθετικών.</li>
        <li><strong>Παρόχους υπηρεσιών πληροφορικής:</strong> που υποστηρίζουν τα συστήματα διαχείρισης ιατρείου.</li>
        <li><strong>Αρμόδιες αρχές:</strong> όταν απαιτείται από τη νομοθεσία (π.χ. φορολογικές αρχές, ΕΟΠΥΥ).</li>
      </ul>

      <h2>7. Χρόνος Διατήρησης Δεδομένων</h2>
      <table>
        <tr><th>Κατηγορία δεδομένων</th><th>Περίοδος διατήρησης</th></tr>
        <tr><td>Ιατρικοί φάκελοι ασθενών</td><td>Τουλάχιστον 10 έτη από την τελευταία θεραπεία</td></tr>
        <tr><td>Δεδομένα ραντεβού</td><td>3 έτη από την τελευταία αλληλεπίδραση</td></tr>
      </table>

      <h2>8. Τα Δικαιώματά σας</h2>
      <p>Έχετε το δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, φορητότητας και εναντίωσης στην επεξεργασία των δεδομένων σας.</p>
      <p>Για την άσκηση των δικαιωμάτων σας, επικοινωνήστε μαζί μας στο <strong>info@dentplant.gr</strong>.</p>
      <p>Εάν θεωρείτε ότι τα δικαιώματά σας έχουν παραβιαστεί, μπορείτε να προσφύγετε στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).</p>`,

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

      /* ── Social Proof / Reviews ──────────────── */
      'reviews.title': 'Φροντίδα που Εμπνέει Εμπιστοσύνη',
      'reviews.text': 'Η ικανοποίηση των ασθενών μας είναι η μεγαλύτερη ανταμοιβή μας. Δείτε γιατί εκατοντάδες ασθενείς εμπιστεύονται τον Άγγελο Μοσχόπουλο για την υγεία του χαμόγελού τους.',
      'reviews.btn': 'Δειτε τις κριτικες στο Google',
      'reviews.r1.name': 'Γιώργος Π.',
      'reviews.r1.text': 'Επαγγελματισμός και φροντίδα στο ύψιστο επίπεδο. Η διαδικασία ήταν ανώδυνη και το αποτέλεσμα εκπληκτικό. Συστήνω τον Άγγελο Μοσχόπουλο ανεπιφύλακτα.',
      'reviews.r2.name': 'Μαρία Κ.',
      'reviews.r2.text': 'Εξαιρετική εμπειρία! Ο γιατρός είναι πολύ επεξηγηματικός και σου εμπνέει απόλυτη εμπιστοσύνη. Τα εμφυτεύματα δείχνουν και τα νιώθω σαν φυσικά δόντια.',
      'reviews.r3.name': 'Νικόλαος Σ.',
      'reviews.r3.text': 'Πολύ καθαρό ιατρείο και φιλικό προσωπικό. Ο κ. Μοσχόπουλος είναι κορυφαίος στον τομέα του. Μετά από χρόνια ταλαιπωρίας, βρήκα επιτέλους τη λύση.',
      'reviews.r4.name': 'Άννα Μ.',
      'reviews.r4.text': 'Η "μέθη" ήταν η καλύτερη επιλογή για μένα που φοβόμουν. Δεν κατάλαβα τίποτα! Ένα μεγάλο ευχαριστώ για το νέο μου χαμόγελο.',
      'reviews.verified': 'Επιβεβαιωμένος Ασθενής',

      /* ── Management Portal ───────────────────── */
      'mg.title': 'Διαχείριση Ραντεβού',
      'mg.subtitle': 'Δείτε ή ακυρώστε την κράτησή σας.',
      'mg.loading': 'Αναζήτηση ραντεβού...',
      'mg.notfound': 'Το ραντεβού δεν βρέθηκε. Ελέγξτε αν το ραντεβού έχει ήδη ακυρωθεί ή αν το UID είναι σωστό.',
      'mg.appointment': 'Το Ραντεβού σας',
      'mg.cancel_btn': 'Ακύρωση Ραντεβού',
      'mg.reschedule_btn': 'Αλλαγή Ραντεβού',
      'mg.confirm_title': 'Επιβεβαίωση Ακύρωσης',
      'mg.confirm_text': 'Είστε σίγουροι ότι θέλετε να ακυρώσετε το ραντεβού σας; Αυτή η ενέργεια δεν μπορεί να αναιρεθεί.',
      'mg.confirm_yes': 'Ναι, Ακύρωση',
      'mg.confirm_no': 'Όχι, Επιστροφή',
      'mg.cancel_success': 'Το ραντεβού σας ακυρώθηκε με επιτυχία.',
      'mg.redirecting': 'Επιστροφή στην αρχική σελίδα σε λίγα δευτερόλεπτα...',

      /* ── faq.html ─────────────────────────────── */
      'faq.title': 'Συχνές Ερωτήσεις',
      'faq.subtitle': 'Υπεύθυνες απαντήσεις στις πιο συχνές απορίες σας για τα οδοντικά εμφυτεύματα.',
      'faq.q1': 'Ποιο είναι το κόστος των οδοντικών εμφυτεύμάτων;',
      'faq.a1': 'Το κόστος των οδοντικών εμφυτευμάτων εξαρτάται από την πολυπλοκότητα της περίπτωσης, τον αριθμό των δοντιών και την επιλογή των υλικών. Στην κλινική μας προσφέρουμε πλήρη διαφάνεια με αναλυτικά και εξατομικευμένα σχέδια θεραπείας.',
      'faq.q2': 'Πονάει η διαδικασία τοποθέτησης οδοντικών εμφυτευμάτων;',
      'faq.a2': 'Η επέμβαση πραγματοποιείται με τοπική αναισθησία ή μέθη, διασφαλίζοντας μια εντελώς ανώδυνη εμπειρία. Η μετεγχειρητική ενόχληση είναι συνήθως ήπια και αντιμετωπίζεται εύκολα με κοινά παυσίπονα.',
      'faq.q3': 'Πόσο καιρό διαρκεί η διαδικασία από την αρχή μέχρι το τέλος;',
      'faq.a3': 'Η τυπική διαδικασία διαρκεί από 3 έως 6 μήνες, επιτρέποντας στο εμφύτευμα να ενσωματωθεί πλήρως στο οστό. Σε ορισμένες περιπτώσεις, είναι δυνατή η άμεση τοποθέτηση και φόρτωση του δοντιού την ίδια ημέρα.',
      'faq.q4': 'Υπάρχει εγγύηση για τα οδοντικά εμφυτεύματα;',
      'faq.a4': 'Χρησιμοποιούμε κορυφαία παγκοσμίως συστήματα εμφυτευμάτων που συνοδεύονται από εφ’ όρου ζωής εγγύηση για τα υλικά. Η μακροχρόνια επιτυχία διασφαλίζεται μέσω του τακτικού ελέγχου και της σωστής στοματικής υγιεινής.',
      'faq.q5': 'Είμαι κατάλληλος υποψήφιος για εμφυτεύματα;',
      'faq.a5': 'Οι περισσότεροι ενήλικες που έχουν χάσει ένα ή περισσότερα δόντια είναι κατάλληλοι υποψήφιοι. Κατά την πρώτη επίσκεψη, αξιολογούμε την υγεία των ούλων και την ποιότητα του οστού για να καθορίσουμε την καταλληλότερη λύση για εσάς.',
      'faq.q6': 'Τι είναι η οστική ανάπλαση και πότε είναι απαραίτητη;',
      'faq.a6': 'Η οστική ανάπλαση είναι μια σύγχρονη τεχνική που χρησιμοποιείται όταν το φυσικό οστό δεν είναι επαρκές για να στηρίξει το εμφύτευμα. Μέσω αυτής της διαδικασίας, αναδομούμε το θεμέλιο του χαμόγελού σας για απόλυτη σταθερότητα.',

      /* ── Image Alts ─────────────────────────── */
      'alt.logo': 'Λογότυπο Dentplant Clinic - Άγγελος Μοσχόπουλος Εμφυτεύματα Παλαιό Φάληρο',
      'alt.hero_implants': 'Λεπτομέρεια διαδικασίας τοποθέτησης οδοντικών εμφυτευμάτων υψηλής ποιότητας',
      'alt.couple': 'Χαμογελαστό ζευγάρι ηλικιωμένων που απολαμβάνει τη ζωή με οδοντικά εμφυτεύματα',
      'alt.bone_graft': 'Οστικό μόσχευμα για επιτυχημένα οδοντικά εμφυτεύματα',
      'alt.timeline': 'Αναλυτικό χρονοδιάγραμμα θεραπείας εμφυτευμάτων από την ενημέρωση έως την αποκατάσταση',
      'alt.comparison': 'Σύγκριση οδοντικών εμφυτευμάτων έναντι παραδοσιακών γεφυρών',
      'alt.cost': 'Διαφανής κοστολόγηση και τιμές οδοντικών εμφυτευμάτων',
      'alt.sedation': 'Ανώδυνη οδοντιατρική χειρουργική με μέθη (Sedation)',
      'alt.doctor': 'Ο ιατρός Άγγελος Μοσχόπουλος στο οδοντιατρείο του στο Παλαιό Φάληρο',
      'alt.fb': 'Επισκεφθείτε την Dentplant Clinic στο Facebook',
      'alt.ig': 'Ακολουθήστε τον Άγγελο Μοσχόπουλο στο Instagram',
      'alt.li': 'Επαγγελματικό προφίλ του Άγγελου Μοσχόπουλου στο LinkedIn',
      'footer.review_btn': 'ΑΞΙΟΛΟΓΗΣΤΕ ΜΑΣ ΣΤΟ GOOGLE',
      'contact.review_cta': 'Γράψτε μια Αξιολόγηση',
      'contact.hours.title': 'Ωράριο Λειτουργίας',
      'days.mon_fri': 'Δευτέρα - Παρασκευή',
      'days.sat': 'Σάββατο',
      'days.sun': 'Κυριακή',
      'hours.mon_fri': '10:00 – 20:00',
      'hours.closed': 'Κλειστά',
    },
    en: {
    'title.home': 'Dental Implants | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.about': 'Dental Surgeon | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.services': 'Dental Services | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.contact': 'Contact & Location | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.booking': 'Online Appointment | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.privacy': 'Privacy Policy | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.manage': 'Manage Appointment | Paleo Faliro | Dr. Angelo Moshopoulos',
    'title.faq': 'FAQ | Paleo Faliro | Dr. Angelo Moshopoulos',
    'desc.home': 'Specialized dental implant clinic in Paleo Faliro. Restore your smile with modern techniques by Dr. Angelo Moshopoulos. Book your appointment online today!',
    'desc.about': 'Meet Dr. Angelo Moshopoulos, an experienced dental surgeon in Paleo Faliro specializing in dental implants and cosmetic dentistry. Read his full biography.',
    'desc.services': 'Comprehensive dental services in Paleo Faliro: Implants, cosmetic dentistry, and prevention. Learn about our advanced dental solutions. Book online today!',
    'desc.faq': 'Frequently asked questions about dental implants: cost, pain, duration, and warranty. Get expert answers from our clinic in Paleo Faliro.',
    'desc.contact': 'Contact Dentplant Clinic in Paleo Faliro. Visit us at Davari Square 2 or call 210 9312651 to schedule your dental appointment. We look forward to meeting you!',
    'desc.booking': 'Book your dental appointment online easily and quickly. Choose the day and time that fits your schedule at our clinic in Paleo Faliro. We look forward to seeing you!',
    'desc.privacy': 'Privacy Policy of Dentplant Clinic in Paleo Faliro. Learn how we protect your personal data in compliance with GDPR and Greek data protection laws.',
    'desc.manage': 'Manage your dental appointment at Dentplant Clinic. View details, reschedule, or cancel your appointment easily and quickly through our online portal.',
      /* ── Navigation ───────────────────────────── */
      'nav.home': 'Home',
      'nav.doctor': 'The Doctor',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.faq': 'FAQ',

      /* ── Hero / Standalone Header ──────────────── */
      'hero.name': 'Dr. Angelo Moshopoulos',
      'hero.title': 'Dental Implant Clinic',

      /* ── Shared booking button ────────────────── */
      'booking.btn': 'Online Appointment',

      /* ── index.html — article cards ──────────── */
      'card1.title': 'Am I a Candidate for Dental Implants?',
      'card1.excerpt': 'Most adults who are missing one or more teeth are good candidates for dental implants. Healthy gums and sufficient jawbone are key.',
      'card2.title': 'From Consultation to Completion: Understanding the Process',
      'card2.excerpt': 'The implant process is straightforward but takes time. From consultation to final crown, the journey typically takes 3–6 months.',
      'card3.title': 'Implants vs. Bridges vs. Dentures',
      'card3.excerpt': 'Dental implants stand alone. They replace the root as well as the tooth, preserve your jawbone, and require no damage to surrounding teeth, unlike bridges or dentures.',
      'card4.title': 'Bone Grafting and Implants',
      'card4.excerpt': 'Insufficient bone is rarely the end of the story. Bone grafting is a routine procedure that can rebuild the foundation needed for your smile.',
      'card5.title': 'How Much Do Dental Implants Really Cost?',
      'card5.excerpt': 'Implants have a higher upfront cost but last decades. They are almost always the most cost-effective solution for quality of life.',
      'card6.title': 'Dental Implants Under Sedation',
      'card6.excerpt': 'Dental anxiety is common, but modern sedation makes implant surgery far more comfortable than expected.',

      /* ── index.html — modal 2 (Candidate) ─────── */
      'modal2.title': 'Am I a Candidate for Dental Implants? What You Need to Know',
      'modal2.p1': 'Most adults who are missing one or more teeth are good candidates for dental implants. The key factors are healthy gums and sufficient jawbone to support the implant.',
      'modal2.p2': 'Conditions like diabetes or a history of smoking don\'t necessarily rule you out — they simply require a more careful assessment by our team.',
      'modal2.p3': '<span class="font-bold text-gray-900">Lost too much bone?</span><br>If you\'ve been told you\'ve lost too much bone, don\'t worry. Bone grafting can often restore the foundation needed for a successful implant.',
      'modal2.p4': 'The best way to find out is a simple consultation. Our team will evaluate your mouth, take a scan, and give you a clear, honest answer. Most patients are surprised to learn they qualify.',

      /* ── index.html — modal 3 (Timeline) ── */
      'modal3.title': 'From Consultation to Completion: Understanding the Process',
      'modal3.p1': 'The implant process is straightforward, though it does take time for permanent stability. Here\'s a simple overview of what to expect:',
      'modal3.p2': '<span class="font-bold text-gray-900">1. Consultation & planning:</span> We assess your teeth, gums, and bone structure and create a personalised treatment plan.',
      'modal3.p3': '<span class="font-bold text-gray-900">2. Implant placement:</span> A small titanium post is placed into the jawbone under local anaesthesia. Most patients report minimal discomfort.',
      'modal3.p4': '<span class="font-bold text-gray-900">3. Healing (osseointegration):</span> Over 2–4 months, the implant fuses naturally with the bone — creating a stable, permanent foundation.',
      'modal3.p5': '<span class="font-bold text-gray-900">4. Crown fitting:</span> Once healed, a custom-made crown is attached. The result looks, feels, and functions just like a natural tooth.',
      'modal3.p6': 'From start to finish, the journey typically takes 3–6 months — and the result is designed to last a lifetime.',

      /* ── index.html — modal 4 (Comparison) ─── */
      'modal4.title': 'Implants vs. Bridges vs. Dentures: Which Is Right for You?',
      'modal4.p1': 'When replacing missing teeth, you have three main options — and they\'re not all equal.',
      'modal4.p2': '<span class="font-bold text-gray-900">Dentures</span> are removable and affordable, but can slip, feel uncomfortable, and don\'t prevent bone loss over time.',
      'modal4.p3': '<span class="font-bold text-gray-900">Bridges</span> are fixed and look natural, but require grinding down healthy neighbouring teeth to act as anchors — a permanent compromise.',
      'modal4.p4': '<span class="font-bold text-gray-900">Dental implants</span> stand alone. They replace the root as well as the tooth, preserve your jawbone, and require no damage to surrounding teeth.',
      'modal4.p5': 'For most patients who are candidates, implants are simply the smartest long-term investment in their smile and oral health.',

      /* ── index.html — modal 5 (Bone Grafting) ─── */
      'modal5.title': 'Bone Grafting and Implants: Why It\'s Not a Problem If You\'ve Lost Bone',
      'modal5.p1': 'One of the most common reasons patients are told they can\'t have implants is insufficient bone. When a tooth is lost, the jawbone beneath it gradually shrinks.',
      'modal5.p2': 'But this is rarely the end of the story. Bone grafting is a routine procedure that rebuilds lost bone using natural or synthetic material.',
      'modal5.p3': 'Once the graft has integrated —usually within a few months— the area is ready to support an implant just like any other. Many of our patients who were initially told "no" elsewhere have gone on to receive successful implants after grafting.',

      /* ── index.html — modal 6 (Cost) ─── */
      'modal6.title': 'How Much Do Dental Implants Really Cost — and Are They Worth It?',
      'modal6.p1': 'Dental implants have a higher upfront cost than other options. But when you look at the full picture, they are almost always the most cost-effective solution over time.',
      'modal6.p2': 'Dentures and bridges need to be replaced, repaired, and adjusted over the years. Implants, with proper care, last decades — often a lifetime.',
      'modal6.p3': 'Beyond money, consider quality of life: implants let you eat, speak, and smile with complete confidence, without worrying about attachments or movement.',

      /* ── index.html — modal 7 (Sedation) ─── */
      'modal7.title': 'Dental Implants Under Sedation: A Stress-Free Experience',
      'modal7.p1': 'Dental anxiety is incredibly common — and completely understandable. The good news is that implant surgery today is far more comfortable than most patients expect.',
      'modal7.p2': 'We offer sedation options tailored to your level of anxiety. Whether you prefer light oral sedation or deeper IV sedation, we\'ll make sure you feel safe and at ease throughout.',
      'modal7.p3': 'Most patients are genuinely surprised by how little they feel — and how quickly it\'s over. The procedure itself is performed under local anaesthesia, meaning there is no pain during the surgery.',
      'modal7.p4': 'If fear has been holding you back from getting the smile you deserve, let\'s talk. A stress-free experience starts with a simple conversation.',

      /* ── Quotes ───────────────────────────────── */
      'quote.index': '&quot; The health and functionality of your smile are our top priority.<br>In our state-of-the-art practice, we combine scientific excellence with a human touch. We welcome you to an environment where personalised care meets innovation. &quot;',
      'quote.about': '&quot; Our dedication to the science of dentistry is rooted in providing personalized, meaningful care for every individual. By embracing continuous innovation and maintaining a deep respect for our patients\' needs, we build relationships of trust that last a lifetime. It is a true honor to be entrusted with your smile. &quot;',
      'quote.services': '&quot; We provide a full range of modern dental treatments, each one tailored to what you actually need.<br>Backed by the latest technology and years of hands-on expertise, we aim for results that look natural and last. Your oral health drives every decision we make. &quot;',

      /* ── about.html — biography sections ──────── */
      'about.p1': 'Combining a deep commitment to scientific progress with a patient-centered approach, <strong class="text-gray-900">Dr. Angelo Moshopoulos</strong> began his academic career at McGill University. He graduated in 1992 with a degree in Biology, specializing in Microbiology and Immunology.',
      'about.p2': 'His early passion for research led him to a two-year tenure as a researcher at the Hellenic Pasteur Institute, after which he dedicated himself to clinical dentistry, earning his degree from Semmelweis University in 1999.',
      'about.p3': 'Dr. Moshopoulos has served the southern suburbs since 2002, welcoming patients to his private practice in Paleo Faliro. Since 2003, he has also served as a Consultant in the Oral and Maxillofacial Surgery Department at Metropolitan Hospital.',
      'about.p4': 'In these roles, he has developed extensive expertise in dental implantology, with a focus on precision-led treatments that achieve both aesthetic harmony and complete functional restoration.',
      'about.p5': 'Driven by a vision of community service, he played a key role in the 2001 founding of the Paleo Faliro Municipal Dental Clinic.',
      'about.p6': 'For over two decades, he has voluntarily overseen preventive dental care for the municipality’s children. His dedication to community service was honored in 2015 at a special ceremony by the Municipalities of Paleo Faliro and Piraeus.',

      /* ── services.html ────────────────────────── */
      'services.p1': 'At our practice, we believe that exceptional dentistry is built on a foundation of trust and meticulous planning. Our core philosophy is simple: your long-term oral health is our primary metric of success. We eschew transient solutions in favor of comprehensive treatment protocols. This means every procedure is backed by thorough diagnostic planning, education regarding daily hygiene, and an unwavering commitment to preventive care. We don\'t just restore teeth; we protect your future health.',
      'services.p2': 'A beautiful smile is only as strong as the structures supporting it. To ensure the highest success rates for restorative and cosmetic work, we follow a strictly phased approach to care:<ul class="list-none space-y-6 mt-6"><li><strong class="text-gray-900">Phase I: Stabilization & Prevention</strong><div class="mt-2">Every journey begins with a comprehensive assessment and professional cleaning. We prioritize the health of your supporting tissues, addressing periodontal (gum) health and early-stage decay before proceeding to advanced treatments.</div></li><li><strong class="text-gray-900">Phase II: Restorative Excellence</strong><div class="mt-2">Once a healthy foundation is established, we move toward specialized interventions. From precision fillings to complex implant placement, our procedures are performed with a focus on structural durability and aesthetic harmony.</div></li><li><strong class="text-gray-900">Phase III: Maintenance & Education</strong><div class="mt-2">We empower our patients with the knowledge and tools necessary to maintain their results at home, ensuring that your investment in your smile lasts for a lifetime.</div></li></ul>',
      'services.p3': 'We understand that for many, a visit to the dentist can be a source of apprehension. We have intentionally designed our practice to redefine that experience, blending clinical professionalism with a welcoming, stress-free environment.<div class="mt-10 space-y-6"><div class="font-bold text-xl text-gray-900 mb-4">Why Choose Our Practice?</div><ul class="list-none space-y-6"><li><strong class="text-gray-900">A Calming Environment:</strong><div class="mt-2">Our clinic is designed to be a tranquil space where you can feel at ease from the moment you arrive.</div></li><li><strong class="text-gray-900">A Compassionate Team:</strong><div class="mt-2">Our staff is specifically trained to support patients with dental anxiety, offering a gentle touch and clear communication at every step.</div></li><li><strong class="text-gray-900">Modern Convenience:</strong><div class="mt-2">We respect your time. To accommodate busy professional and family schedules, we offer flexible appointment times tailored to your needs.</div></li></ul></div>',

      /* ── contact.html — phone labels ─────────── */
      'contact.landline': 'tel. 210 931 2651',
      'contact.address.l1': 'Plateia Ntavari 2',
      'contact.address.l2': 'Paleo Faliro',
      'contact.address.l3': '17564',

      /* ── Footer ───────────────────────────────── */
      'footer.address': 'Plateia Ntavari 2, Paleo Faliro<br>tel. 210 931 2651',
      'footer.copyright': 'Copyright 2026. Dentplant Clinic. <br>All Rights Reserved.',
      'footer.disclaimer': 'Information provided on this site is for educational purposes only and does not substitute for professional medical consultation.',
      'footer.membership': 'Member of the Dental Association of Piraeus',
      'footer.medical_review': 'Medically reviewed by Dr. Angelo Moshopoulos, DDS | Updated: April 2026',
      'footer.privacy': 'Privacy Policy',

      /* ── privacy.html ─────────────────────────── */
      'privacy.title': 'Privacy Policy',
      'privacy.body': `<p><strong>Last updated: 13 April 2026</strong></p>
      <p>This Privacy Policy explains how Dentplant Clinic collects, uses, stores, and protects your personal data when you visit our website (dentplant.gr) or use our dental services. It has been prepared in accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and Greek Law 4624/2019.</p>
      <p>Please read this Policy carefully. By using our websites or booking an appointment, you acknowledge that you have read and understood how we handle your personal data.</p>

      <h2>1. Data Controller</h2>
      <p>The data controller responsible for your personal data is:</p>
      <table>
        <tr><th>Business Name</th><td>Dentplant Clinic</td></tr>
        <tr><th>Websites</th><td>dentplant.gr / i-smile.gr</td></tr>
        <tr><th>Address</th><td>Plateia Ntavari 2, Paleo Faliro, 17564, Greece</td></tr>
        <tr><th>Email</th><td>info@dentplant.gr / info@i-smile.gr</td></tr>
        <tr><th>Phone</th><td>+30 210 9312651</td></tr>
        <tr><th>Tax number</th><td>077118016</td></tr>
      </table>

      <h2>2. What Personal Data We Collect</h2>
      <h3>2.1 Website Visitors</h3>
      <ul>
        <li>IP address and approximate geographic location</li>
        <li>Browser type and version and operating system</li>
        <li>Pages visited, time spent, and navigation path</li>
        <li>Referring website or search query</li>
      </ul>
      <h3>2.2 Booking & Contact Forms</h3>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Preferred appointment date and time</li>
        <li>Any message or notes you choose to include</li>
      </ul>
      <h3>2.3 Patients (Medical / Health Data)</h3>
      <p>As part of providing dental care, we collect and process special category (sensitive) health data, including:</p>
      <ul>
        <li>Medical and dental history</li>
        <li>X-ray images and clinical photographs</li>
        <li>Treatment plans, procedures, and clinical notes</li>
        <li>Medication and allergy information</li>
      </ul>

      <h2>3. Legal Basis for Processing</h2>
      <ul>
        <li><strong>Contractual necessity:</strong> to provide dental treatment and manage appointments.</li>
        <li><strong>Legal obligation:</strong> to comply with medical record-keeping requirements under Greek law.</li>
        <li><strong>Legitimate interest:</strong> for website analytics and improvements.</li>
        <li><strong>Explicit consent:</strong> for processing health data and marketing photos.</li>
      </ul>

      <h2>4. How We Use Your Data</h2>
      <ul>
        <li>Schedule, confirm, and manage dental appointments</li>
        <li>Deliver safe and effective dental treatment</li>
        <li>Send appointment reminders via SMS or email</li>
        <li>Maintain and update your patient medical record</li>
      </ul>

      <h2>5. Cookies and Tracking Technologies</h2>
      <p>Our websites use cookies. You can manage preferences in your browser settings.</p>

      <h2>6. Who We Share Your Data With</h2>
      <ul>
        <li><strong>Dental laboratories:</strong> for prosthetics fabrication.</li>
        <li><strong>IT service providers:</strong> who support our practice management systems.</li>
        <li><strong>Competent authorities:</strong> when required by law (e.g. tax authorities).</li>
      </ul>

      <h2>7. Data Retention</h2>
      <table>
        <tr><th>Data Type</th><th>Retention Period</th></tr>
        <tr><td>Patient medical records</td><td>Minimum 10 years after last treatment</td></tr>
        <tr><td>Appointment data</td><td>3 years from last interaction</td></tr>
      </table>

      <h2>8. Your Rights Under GDPR</h2>
      <p>You have the right to access, rectify, erase, restrict, and object to the processing of your data, as well as the right to data portability.</p>
      <p>To exercise any of these rights, please contact us at <strong>info@dentplant.gr</strong>.</p>
      <p>If you believe your rights have been violated, you have the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).</p>`,

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

      /* ── Social Proof / Reviews ──────────────── */
      'reviews.title': 'Care That Inspires Confidence',
      'reviews.text': "Our patients' satisfaction is our greatest reward. Discover why hundreds of patients trust Dr. Moshopoulos for their dental health.",
      'reviews.btn': 'View Google Reviews',
      'reviews.r1.name': 'George P.',
      'reviews.r1.text': 'Professionalism and care at the highest level. The procedure was painless and the result amazing. I highly recommend Dr. Moshopoulos.',
      'reviews.r2.name': 'Maria K.',
      'reviews.r2.text': 'Excellent experience! The doctor is very explanatory and inspires absolute confidence. The implants look and feel like natural teeth.',
      'reviews.r3.name': 'Nikolas S.',
      'reviews.r3.text': 'Very clean clinic and friendly staff. Mr. Moshopoulos is a leader in his field. After years of suffering, I finally found the solution I was looking for.',
      'reviews.r4.name': 'Anna M.',
      'reviews.r4.text': 'IV sedation was the best choice for me as I was afraid. I didn\'t feel a thing! A big thank you for my new smile.',
      'reviews.verified': 'Verified Patient',

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

      /* ── faq.html ─────────────────────────────── */
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Expert answers to your most common questions about dental implants.',
      'faq.q1': 'What is the cost of dental implants?',
      'faq.a1': 'The cost of dental implants depends on the complexity of the case, the number of teeth, and the choice of materials. In our clinic, we offer full transparency with detailed and personalized treatment plans.',
      'faq.q2': 'Is the dental implant placement procedure painful?',
      'faq.a2': 'The surgery is performed under local anesthesia or sedation, ensuring a completely painless experience. Postoperative discomfort is usually mild and easily managed with common pain relievers.',
      'faq.q3': 'How long does the entire process take?',
      'faq.a3': 'The typical process takes 3 to 6 months, allowing the implant to fully integrate with the bone. In certain cases, immediate placement and loading of the tooth on the same day are possible.',
      'faq.q4': 'Is there a warranty for dental implants?',
      'faq.a4': 'We use world-leading implant systems that come with a lifetime warranty on materials. Long-term success is ensured through regular checkups and proper oral hygiene.',
      'faq.q5': 'Am I a suitable candidate for implants?',
      'faq.a5': 'Most adults who have lost one or more teeth are suitable candidates. During your first visit, we evaluate the health of your gums and the quality of the bone to determine the best solution for you.',
      'faq.q6': 'What is bone grafting and when is it necessary?',
      'faq.a6': 'Bone grafting is a modern technique used when the natural bone is insufficient to support the implant. Through this process, we rebuild the foundation of your smile for absolute stability.',

      /* ── Image Alts ─────────────────────────── */
      'alt.logo': 'Dentplant Clinic Logo - Dr. Angelo Moshopoulos Dental Implants Paleo Faliro',
      'alt.hero_implants': 'Close-up of high-quality dental implant procedure at Dentplant Clinic',
      'alt.couple': 'Smiling elderly couple enjoying life with dental implants',
      'alt.bone_graft': 'Bone grafting procedure for successful dental implants',
      'alt.timeline': 'Detailed dental implant treatment timeline from consultation to recovery',
      'alt.comparison': 'Comparison of dental implants vs traditional bridge solutions',
      'alt.cost': 'Transparent dental implant cost and surgical pricing details',
      'alt.sedation': 'Conscious sedation for painless dental implant surgery in Paleo Faliro',
      'alt.doctor': 'Dr. Angelo Moshopoulos at his dental implant clinic in Paleo Faliro Athens',
      'alt.fb': 'Visit Dentplant Clinic on Facebook',
      'alt.ig': 'Follow Dr. Angelo Moshopoulos on Instagram',
      'alt.li': 'Dr. Angelo Moshopoulos professional LinkedIn profile',
      'footer.review_btn': 'REVIEW US ON GOOGLE',
      'contact.review_cta': 'Write a Review',
      'contact.hours.title': 'Opening Hours',
      'days.mon_fri': 'Monday - Friday',
      'days.sat': 'Saturday',
      'days.sun': 'Sunday',
      'hours.mon_fri': '10:00 – 20:00',
      'hours.closed': 'Closed',
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

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.querySelectorAll('meta[name="description"][data-i18n-content]').forEach(el => {
      const key = el.getAttribute('data-i18n-content');
      if (t[key] !== undefined) el.setAttribute('content', t[key]);
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

  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && (langParam === 'el' || langParam === 'en')) {
      currentLang = langParam;
    }
    applyLanguage(currentLang);
  });

  window.i18n = { applyLanguage, toggleLanguage, getCurrentLang, t, translations };
})();
