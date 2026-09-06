import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume():
    pdf_path = r"C:\Users\mukes\projects\mukesh-portfolio\public\resume.pdf"
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    story = []

    # Palette
    COLOR_PRIMARY = colors.HexColor("#0a0a0a")
    COLOR_ACCENT = colors.HexColor("#a67c1e")
    COLOR_TEXT = colors.HexColor("#222222")
    COLOR_MUTED = colors.HexColor("#555555")
    COLOR_LIGHT = colors.HexColor("#888888")
    COLOR_LINE = colors.HexColor("#dddddd")

    styles = getSampleStyleSheet()

    name_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=COLOR_PRIMARY,
        alignment=TA_LEFT
    )

    title_style = ParagraphStyle(
        'Title',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=COLOR_ACCENT,
        alignment=TA_LEFT
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=COLOR_MUTED,
        alignment=TA_LEFT
    )

    section_head_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=COLOR_PRIMARY,
        spaceBefore=10,
        spaceAfter=3
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_PRIMARY
    )

    job_sub_style = ParagraphStyle(
        'JobSub',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=12,
        textColor=COLOR_ACCENT
    )

    job_date_style = ParagraphStyle(
        'JobDate',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=COLOR_LIGHT,
        alignment=TA_RIGHT
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=COLOR_TEXT
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=COLOR_TEXT,
        leftIndent=12,
        firstLineIndent=-8,
        spaceBefore=1,
        spaceAfter=1
    )

    cert_style = ParagraphStyle(
        'Cert',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=COLOR_TEXT
    )

    # Header Section
    story.append(Paragraph("MUKESH KUMAR", name_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("AV Engineer &bull; Cinema Projection Engineer &bull; Sound & Projection Manager", title_style))
    story.append(Spacer(1, 4))

    contact_text = (
        "<b>Email:</b> mukesh0792@outlook.com &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Phone:</b> +91 8279717884 &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>LinkedIn:</b> linkedin.com/in/mukesh-kumar-1a42bb23 &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Location:</b> India"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1, color=COLOR_ACCENT, spaceBefore=0, spaceAfter=8))

    # Executive Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_head_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=0, spaceAfter=5))
    summary_text = (
        "Senior AV and Cinema Projection Engineer with over 14 years of hands-on technical and operational leadership "
        "across India's leading multiplex circuits. Proven track record managing sound and projection operations across 80+ "
        "screens with sustained 99%+ operational uptime. Expert in end-to-end setup, commissioning, color calibration, "
        "Laser Light Upgrade (LLU) retrofits, DCI compliance, cinema servers (Dolby, Qube, GDC), multichannel audio "
        "tuning, and networked AV distribution over Dante and Q-SYS."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # Core Competencies Table
    story.append(Paragraph("CORE TECHNICAL COMPETENCIES", section_head_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=0, spaceAfter=5))

    skills_data = [
        [
            Paragraph("<b>Projection & Laser Systems:</b><br/>Barco (Series 2 & 4), Christie (RealLaser, CineLife), NEC Laser, Laser Light Upgrades (LLU), DCI-P3 Color Calibration, 14fL Target Luminance, Optical Alignment", cert_style),
            Paragraph("<b>Cinema Servers & IMB:</b><br/>Dolby (IMS3000), Qube Cinema (XP), GDC Media Servers, Integrated Media Blocks, DCP Ingestion, KDM Key Management, RAID Arrays, Show Automation", cert_style)
        ],
        [
            Paragraph("<b>Cinema Sound & Acoustics:</b><br/>Dolby Multichannel Audio, Dante Audio over IP (Level 1), Q-SYS Cinema (Core 101), AES/EBU Digital Audio, Auditorium B-Chain Tuning, Pink Noise RTA", cert_style),
            Paragraph("<b>AV Infrastructure & Operations:</b><br/>Lightware AV-over-IP (Level 1), IP Multicast & IGMP, PTP Clock Sync, Multi-Site Fleet Operations, Preventive Maintenance SOPs, Vendor RMA", cert_style)
        ]
    ]

    skills_table = Table(skills_data, colWidths=[270, 270])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8f9fa")),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_LINE),
        ('INNERGRID', (0,0), (-1,-1), 0.5, COLOR_LINE),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 6))

    # Professional Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_head_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=0, spaceAfter=5))

    # Role 1: PVR INOX
    pvr_header = [
        [
            Paragraph("Manager – Sound & Projection", job_title_style),
            Paragraph("Dec 2024 – Present", job_date_style)
        ],
        [
            Paragraph("PVR INOX Limited &bull; India's Largest Multiplex Cinema Chain", job_sub_style),
            Paragraph("", job_date_style)
        ]
    ]
    t1 = Table(pvr_header, colWidths=[380, 160])
    t1.setStyle(TableStyle([('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Spacer(1, 3))

    pvr_points = [
        "Overseeing projection and sound operations across 80+ multiplex screens with consistent 99%+ uptime.",
        "Structuring and enforcing preventive maintenance (PM) routines, reducing equipment failure and unplanned downtime.",
        "Leading and mentoring projectionists and technical field staff across distributed sites.",
        "Managing site-level DCI compliance, laser safety protocols, and sound processor B-chain calibration.",
        "Liaising directly with OEMs (Barco, Christie, Dolby, QSC) for rapid warranty claims and RMA part logistics."
    ]
    for pt in pvr_points:
        story.append(Paragraph(f"&bull; {pt}", bullet_style))

    story.append(Spacer(1, 6))

    # Role 2: Qube Cinema
    qube_header = [
        [
            Paragraph("Team Coordinator", job_title_style),
            Paragraph("Jul 2011 – Nov 2024", job_date_style)
        ],
        [
            Paragraph("Qube Cinema Technologies Pvt. Ltd. &bull; Digital Cinema Pioneer", job_sub_style),
            Paragraph("", job_date_style)
        ]
    ]
    t2 = Table(qube_header, colWidths=[380, 160])
    t2.setStyle(TableStyle([('PADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Spacer(1, 3))

    qube_points = [
        "13+ years delivering digital cinema projection and sound installation, commissioning, and maintenance across India.",
        "Handled multi-platform digital cinema projectors including Barco (Series 2 & 4), Christie, and NEC.",
        "Administered cinema servers and Integrated Media Blocks (Dolby, Qube XP, GDC) and managed KDM timelines.",
        "Supported multi-site field deployments, site acoustic alignments, and rapid emergency troubleshooting.",
        "Trained junior engineers in safety procedures, optical alignments, and server diagnostics."
    ]
    for pt in qube_points:
        story.append(Paragraph(f"&bull; {pt}", bullet_style))

    story.append(Spacer(1, 6))

    # OEM Certifications & Education
    story.append(Paragraph("OEM CERTIFICATIONS & TRAINING", section_head_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=0, spaceAfter=5))

    certs_data = [
        [
            Paragraph("&bull; <b>Dante Level 1 (3rd Edition)</b> — Audinate (2026)", cert_style),
            Paragraph("&bull; <b>Christie RealLaser & CineLife Safety</b> — Christie Digital (2025)", cert_style)
        ],
        [
            Paragraph("&bull; <b>Lightware AV-OVER-IP Basics Level 1</b> — Lightware (2026)", cert_style),
            Paragraph("&bull; <b>Christie RealLaser & CineLife Light Source</b> — Christie (2025)", cert_style)
        ],
        [
            Paragraph("&bull; <b>Q-SYS QSC Cinema 101 Training</b> — QSC / Q-SYS (2026)", cert_style),
            Paragraph("&bull; <b>Christie Projector & Lamp Safety</b> — Christie Digital (2025)", cert_style)
        ],
        [
            Paragraph("&bull; <b>Barco Series 4 Diagnostics & Service L2</b> — Barco (2025)", cert_style),
            Paragraph("&bull; <b>NEC Cinema Laser NC1202/NC1402 Training</b> — NEC (2024)", cert_style)
        ],
        [
            Paragraph("&bull; <b>Christie Maintenance Series I & II</b> — Christie (2025)", cert_style),
            Paragraph("&bull; <b>Barco Series 2 LLU Retrofit Certified</b> — Barco (2023)", cert_style)
        ],
        [
            Paragraph("&bull; <b>Barco Series 4 Projector Certified L1</b> — Barco (2022)", cert_style),
            Paragraph("&bull; <b>Diploma in Computer Hardware & Networking</b> — IHT (2010)", cert_style)
        ]
    ]

    cert_table = Table(certs_data, colWidths=[270, 270])
    cert_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 1.5),
    ]))
    story.append(cert_table)

    doc.build(story)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    create_resume()
