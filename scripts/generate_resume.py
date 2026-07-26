from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem
from reportlab.lib.enums import TA_LEFT

ACCENT = HexColor('#4F46E5')
DARK = HexColor('#181129')
GREY = HexColor('#4F4767')

styles = getSampleStyleSheet()

name_style = ParagraphStyle('Name', parent=styles['Title'], fontName='Helvetica-Bold',
                             fontSize=24, textColor=DARK, spaceAfter=2, alignment=TA_LEFT)
role_style = ParagraphStyle('Role', parent=styles['Normal'], fontName='Helvetica',
                             fontSize=12.5, textColor=ACCENT, spaceAfter=10)
contact_style = ParagraphStyle('Contact', parent=styles['Normal'], fontName='Helvetica',
                                fontSize=9.5, textColor=GREY, spaceAfter=14)
h2_style = ParagraphStyle('H2', parent=styles['Heading2'], fontName='Helvetica-Bold',
                           fontSize=12.5, textColor=DARK, spaceBefore=14, spaceAfter=6)
body_style = ParagraphStyle('Body', parent=styles['Normal'], fontName='Helvetica',
                             fontSize=9.8, textColor=GREY, leading=14.5, spaceAfter=4)
job_title_style = ParagraphStyle('JobTitle', parent=styles['Normal'], fontName='Helvetica-Bold',
                                  fontSize=10.5, textColor=DARK, spaceAfter=1)
job_meta_style = ParagraphStyle('JobMeta', parent=styles['Normal'], fontName='Helvetica-Oblique',
                                 fontSize=9, textColor=ACCENT, spaceAfter=5)
bullet_style = ParagraphStyle('Bullet', parent=styles['Normal'], fontName='Helvetica',
                               fontSize=9.5, textColor=GREY, leading=13.5)
skill_cat_style = ParagraphStyle('SkillCat', parent=styles['Normal'], fontName='Helvetica-Bold',
                                  fontSize=9.7, textColor=DARK, spaceAfter=2, spaceBefore=6)
skill_items_style = ParagraphStyle('SkillItems', parent=styles['Normal'], fontName='Helvetica',
                                    fontSize=9.3, textColor=GREY, leading=13.5, spaceAfter=2)

doc = SimpleDocTemplate(
    '/home/claude/portfolio-v2/public/resume.pdf',
    pagesize=letter,
    topMargin=0.6 * inch,
    bottomMargin=0.6 * inch,
    leftMargin=0.7 * inch,
    rightMargin=0.7 * inch,
    title='Rahul Biradar - Resume',
    author='Rahul Biradar',
)

story = []

story.append(Paragraph('Rahul Biradar', name_style))
story.append(Paragraph('Full Stack Developer', role_style))
story.append(Paragraph(
    'Phone: 9515743214 &nbsp;|&nbsp; Email: rahulbiradar.work@gmail.com &nbsp;|&nbsp; '
    'LinkedIn: linkedin.com/in/rahulbiradar &nbsp;|&nbsp; GitHub: github.com/Rahul-Biradar-09',
    contact_style
))
story.append(HRFlowable(width='100%', thickness=1, color=HexColor('#E4DFF5'), spaceAfter=4))

story.append(Paragraph('PROFESSIONAL SUMMARY', h2_style))
story.append(Paragraph(
    'Full Stack Developer with 2.6 years of experience building enterprise web applications across '
    'ERP, Healthcare, and Education domains. Experienced in React.js, PHP, CodeIgniter 3 &amp; 4, Slim '
    'Framework, MySQL, REST APIs, authentication, production support, debugging, database optimization, '
    'API integration, responsive web development, and client collaboration. Promoted to Senior Developer '
    'after consistently delivering production-ready features, leading a team of three developers, and '
    'contributing to multiple enterprise projects.',
    body_style
))

story.append(Paragraph('WORK EXPERIENCE', h2_style))
story.append(Paragraph('Senior Developer &mdash; Sanvima Solutions Private Limited', job_title_style))
story.append(Paragraph('April 2024 &ndash; June 2026', job_meta_style))
exp_items = [
    'Developed enterprise web applications.',
    'Built production-ready modules.',
    'Worked on ERP, Healthcare and Education platforms.',
    'Developed and integrated REST APIs.',
    'Integrated frontend with backend services.',
    'Fixed production issues and optimized existing features.',
    'Optimized MySQL database queries.',
    'Performed code reviews.',
    'Participated in client discussions and requirement gathering.',
    'Led a team of three developers.',
]
story.append(ListFlowable(
    [ListItem(Paragraph(item, bullet_style), spaceAfter=2) for item in exp_items],
    bulletType='bullet', start='•', leftIndent=14,
))

story.append(Paragraph('PROJECTS', h2_style))

projects = [
    ('Alpha ERP', 'Enterprise HR & Payroll Management System',
     'Enterprise ERP solution for HR and Admin teams used to manage recruitment, candidate onboarding, '
     'employee management, attendance, leave management, payroll processing, salary structures, '
     'deductions, timesheets, monthly payroll, and payslip generation.',
     'CodeIgniter 4, PHP, MySQL, Bootstrap, JavaScript, jQuery'),
    ('Medayus', 'Healthcare Appointment Management Platform',
     'Healthcare platform that enables patients to register, search doctors, book appointments, manage '
     'doctor schedules, appointment slots, and administrative operations using React.js, Slim REST APIs, '
     'and a CodeIgniter admin panel.',
     'React.js, Slim Framework, CodeIgniter 3, MySQL'),
    ('Kalakakshaaha (KKS)', 'Online Learning & Tutor Discovery Platform',
     'Educational platform connecting students, tutors, trainers, and institutes across multiple '
     'learning categories including arts, music, dance, languages, academics, and skill development.',
     'React.js, CodeIgniter, MySQL'),
]

for pname, tagline, desc, stack in projects:
    story.append(Paragraph(f'{pname} <font color="#4F46E5">&mdash; {tagline}</font>', job_title_style))
    story.append(Paragraph(desc, body_style))
    story.append(Paragraph(f'<b>Tech Stack:</b> {stack}', skill_items_style))
    story.append(Spacer(1, 6))

story.append(Paragraph('TECHNICAL SKILLS', h2_style))
skills = [
    ('Frontend', 'React.js, JavaScript, HTML5, CSS3, Bootstrap'),
    ('Backend', 'PHP, CodeIgniter 3, CodeIgniter 4, Slim Framework, Node.js, Express.js, Python'),
    ('Database', 'MySQL, SQLite'),
    ('Tools', 'Git, Postman, phpMyAdmin, Composer, XAMPP, WinSCP'),
    ('Concepts', 'REST APIs, MVC Architecture, Authentication, CRUD Operations, Role-Based Access '
                  'Control (RBAC), Database Design, SQL Optimization, API Integration, Responsive '
                  'Design, Production Debugging'),
]
for cat, items in skills:
    story.append(Paragraph(cat, skill_cat_style))
    story.append(Paragraph(items, skill_items_style))

doc.build(story)
print('done')
