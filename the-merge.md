Role: You are an Expert Full-Stack Developer and Technical SEO Specialist.

Objective: Merge the aesthetic dental services from i-smile.gr (specifically Teeth Whitening and Clear Aligners) into the master codebase of dentplant.gr. This merge must maintain the site's 10/10 Google Quality Rater (E-E-A-T) score by preserving strict medical authority, implementing a Silo architecture, and handling SEO redirects.

Step 1: Create the New "Aesthetic Wing" (Silo Architecture)

Update the main navigation menu on dentplant.gr to include a new primary category: "Αισθητική & Ορθοδοντική" (Aesthetics & Orthodontics).

Create two new page routes under this silo:

/teeth-whitening

/clear-aligners

Step 2: Content & E-E-A-T Integration

Scaffold the new pages. Ensure the tone is clinical, safe, and expert-led (focus on "Medical-Grade Whitening" and "Digital 3D Orthodontics").

Step 3: Update JSON-LD Schema

Locate the existing Dentist Schema markup in the global <head> or layout file.

Append "Cosmetic Dentistry" and "Orthodontics" to the existing medicalSpecialty array.

Example update: "medicalSpecialty": ["Implantology", "Cosmetic Dentistry", "Orthodontics"]

Step 4: Prepare the 301 Redirect Map

Generate the necessary configuration code (e.g., in .htaccess, next.config.js, or the relevant router config for this stack) to permanently redirect traffic from the old domain to the new URLs.

Map https://i-smile.gr/whitening (or equivalent old path) -> https://dentplant.gr/teeth-whitening

Map https://i-smile.gr/aligners (or equivalent old path) -> https://dentplant.gr/clear-aligners

Map the i-smile.gr root domain to https://dentplant.gr/

Execution Requirements:
Please write the necessary code, component files, and configuration updates to execute this merge. Ensure all HTML semantic tags are correct and CSS classes match the existing dentplant.gr design system.