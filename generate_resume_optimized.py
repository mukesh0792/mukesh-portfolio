import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, Frame, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def create_optimized_resume():
    pdf_path = r"C:\Users\mukes\projects\mukesh-portfolio\public\resume.pdf"
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

    # Calculate margins based on page size
    page_width, page_height = letter
    usable_width = page_width - 1.2*inch  # 0.6*inch left + 0.6*inch right
    column_width = usable_width / 2  # For 2-column layout

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=0.6*inch,
        rightMargin=0.6*inch,
        topMargin=0.7*inch,
        bottomMargin=0.6*inch
    )

    story = []
    styles = getSampleStyleSheet()

    # Color Palette
    COLOR_PRIMARY = colors.HexColor("#1a1a1a")
    COLOR_ACCENT = colors.HexColor("#b8956a")
    COLOR_TEXT = colors.HexColor("#2c2c2c")
    COLOR_MUTED = colors.HexColor("#666666")
    COLOR_LIGHT = colors.HexColor("#888888")
    COLOR_LINE = colors.HexColor("#e8e8e8")
    COLOR_BG_LIGHT = colors.HexColor("#f9f9f9")

    # ─── TYPOGRAPHY STYLES ───

    header_name_style = ParagraphStyle(
        'HeaderName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=26,
        leading=32,
        textColor=COLOR_PRIMARY,
        alignment=TA_LEFT,
        spaceAfter=2
    )

    header_title_style = ParagraphStyle(
        'HeaderTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=COLOR_ACCENT,
        alignment=TA_LEFT,
        spaceAfter=8
    )

    header_contact_style = ParagraphStyle(
        'HeaderContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=COLOR_MUTED,
        alignment=TA_LEFT
    )

    section_head_style = ParagraphStyle(
        'SectionHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=COLOR_PRIMARY,
        spaceBefore=12,
        spaceAfter=8,
        textTransform='uppercase',
        letterSpacing=2
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=COLOR_PRIMARY,
        spaceAfter=2
    )

    job_company_style = ParagraphStyle(
        'JobCompany',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=13,
        textColor=COLOR_ACCENT,
        spaceAfter=1
    )

    job_date_style = ParagraphStyle(
        'JobDate',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=COLOR_LIGHT,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=COLOR_TEXT,
        alignment=TA_JUSTIFY,
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=COLOR_TEXT,
        leftIndent=16,
        firstLineIndent=-10,
        spaceBefore=2,
        spaceAfter=2
    )

    cert_item_style = ParagraphStyle(
        'CertItem',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=COLOR_TEXT,
        spaceBefore=3,
        spaceAfter=3,
        wordWrap='LTR'
    )

    # ═════════════════════════════════════════════════════════════
    # HEADER SECTION
    # ═════════════════════════════════════════════════════════════

    story.append(Paragraph("MUKESH KUMAR", header_name_style))
    story.append(Paragraph("Senior AV Engineer • Cinema Projection Specialist • Sound & Projection Manager", header_title_style))

    contact_info = (
        "<b>Email:</b> mukesh0792@outlook.com &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Phone:</b> +91 8279717884 &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>LinkedIn:</b> linkedin.com/in/mukesh-kumar-1a42bb23 &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Location:</b> India"
    )
    story.append(Paragraph(contact_info, header_contact_style))
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=1.5, color=COLOR_ACCENT, spaceBefore=0, spaceAfter=10))

    # ═════════════════════════════════════════════════════════════
    # EXECUTIVE PROFILE
    # ═════════════════════════════════════════════════════════════

    story.append(Paragraph("PROFESSIONAL PROFILE", section_head_style))

    profile_text = (
        "Senior AV and Cinema Projection Engineer with 14+ years of strategic technical leadership and operational excellence "
        "in mission-critical digital cinema environments. Proven expertise managing 80+ multiplex screens with 99%+ uptime at "
        "PVR INOX Limited. Specialized in end-to-end cinema technology integration: DCI projection systems, Laser Light Upgrades (LLU), "
        "cinema servers, multichannel audio engineering, and networked AV infrastructure. Certified across 12 industry-leading OEM platforms. "
        "Track record of reducing operational downtime, mentoring technical teams, and delivering complex multi-site deployments on schedule."
    )
    story.append(Paragraph(profile_text, body_style))
    story.append(Spacer(1, 6))

    # ═════════════════════════════════════════════════════════════
    # PROFESSIONAL EXPERIENCE
    # ═════════════════════════════════════════════════════════════

    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_head_style))

    # ─── ROLE 1: PVR INOX ───
    story.append(Paragraph("Manager – Sound & Projection", job_title_style))
    story.append(Paragraph("PVR INOX Limited • India's Largest Multiplex Cinema Chain", job_company_style))
    story.append(Paragraph("December 2024 – Present", job_date_style))

    pvr_highlights = [
        "Oversee projection and sound operations across 80+ multiplex screens nationwide with consistent 99%+ operational uptime.",
        "Design, implement, and enforce preventive maintenance (PM) schedules reducing equipment failures and unplanned downtime by 35%.",
        "Lead and mentor team of projectionists and technical staff across distributed sites; establish technical excellence standards.",
        "Manage site-level DCI compliance audits, laser safety protocols, and sound processor B-chain calibration across all properties.",
        "Coordinate directly with OEM partners (Barco, Christie, Dolby, Lightware) for warranty claims, parts logistics, and technical escalations.",
        "Oversee Laser Light Upgrade (LLU) retrofits and system migrations while maintaining operational continuity."
    ]
    for highlight in pvr_highlights:
        story.append(Paragraph(f"• {highlight}", bullet_style))

    story.append(Spacer(1, 12))

    # ─── ROLE 2: QUBE CINEMA ───
    story.append(Paragraph("Team Coordinator", job_title_style))
    story.append(Paragraph("Qube Cinema Technologies Pvt. Ltd. • Digital Cinema Technology Pioneer", job_company_style))
    story.append(Paragraph("July 2011 – November 2024", job_date_style))

    qube_highlights = [
        "Delivered 13+ years of end-to-end digital cinema installation, commissioning, and maintenance across India's multiplex ecosystem.",
        "Led multi-platform projection system deployments: Barco (Series 2 & 4), Christie DCI systems, and NEC laser cinema projectors.",
        "Administered cinema server operations (Dolby IMS3000, Qube XP, GDC) including content ingestion, KDM timelines, and show automation.",
        "Executed multi-site field deployments with technical coordination, acoustic alignment, and rapid emergency troubleshooting.",
        "Trained and mentored junior engineers in safety procedures, optical alignment techniques, and server diagnostics protocols.",
        "Managed preventive maintenance routines and vendor relationships to ensure 98%+ system availability across client sites."
    ]
    for highlight in qube_highlights:
        story.append(Paragraph(f"• {highlight}", bullet_style))

    story.append(Spacer(1, 8))

    # ═════════════════════════════════════════════════════════════
    # OEM CERTIFICATIONS & TRAINING (FIXED LAYOUT)
    # ═════════════════════════════════════════════════════════════

    story.append(Paragraph("OEM CERTIFICATIONS & INDUSTRY TRAINING", section_head_style))

    # Certification items with proper grouping for 2-column layout
    certifications = [
        ["• Dante Level 1 Certified (3rd Edition) – Audinate (2026)",
         "• Christie RealLaser & CineLife Safety – Christie Digital (2025)"],
        ["• Christie RealLaser Light Source – Christie Digital (2025)",
         "• Christie Maintenance Series I & II – Christie Digital (2025)"],
        ["• Christie Projector & Lamp Safety – Christie Digital (2025)",
         "• Barco Series 4 Diagnostics & Service Level 2 – Barco (2025)"],
        ["• Barco Series 4 Projector Level 1 Certified – Barco (2022)",
         "• Barco Series 2 LLU Retrofit Certified – Barco (2023)"],
        ["• Lightware AV-over-IP Basics Level 1 – Lightware (2026)",
         "• Q-SYS Cinema Core 101 Training – QSC (2026)"],
        ["• NEC Cinema Laser NC1202/NC1402 Training – NEC (2024)",
         "• Diploma in Computer Hardware & Networking – IHT, Moradabad (2010)"]
    ]

    # Create table with proper column widths
    cert_data = []
    for left_item, right_item in certifications:
        cert_data.append([
            Paragraph(left_item, cert_item_style),
            Paragraph(right_item, cert_item_style)
        ])

    # Calculate column widths to fit within page
    cert_table = Table(cert_data, colWidths=[3.0*inch, 3.0*inch])
    cert_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
        ('GRID', (0,0), (-1,-1), 0.5, COLOR_LINE),
    ]))
    story.append(cert_table)
    story.append(Spacer(1, 8))

    # ═════════════════════════════════════════════════════════════
    # CORE TECHNICAL COMPETENCIES
    # ═════════════════════════════════════════════════════════════

    story.append(Paragraph("CORE TECHNICAL COMPETENCIES", section_head_style))

    skills_data = [
        [
            Paragraph("<b>Projection & Laser:</b><br/>Barco Series 2 & 4 • Christie RealLaser & CineLife • NEC Laser Projection • Laser Light Upgrades (LLU) • DCI-P3 Color Calibration • 14fL Target Luminance • Optical Alignment & Maintenance", cert_item_style),
            Paragraph("<b>Cinema Servers & IMB:</b><br/>Dolby IMS3000 • Qube XP • GDC Media Servers • Integrated Media Blocks • DCP Ingestion • KDM Management • RAID Array Configuration • Show Automation", cert_item_style)
        ],
        [
            Paragraph("<b>Cinema Audio & Acoustics:</b><br/>Dolby Multichannel Cinema Sound • Dante Audio over IP (Level 1 Certified) • Q-SYS Cinema 101 (Certified) • AES/EBU Digital Audio • B-Chain Tuning & RTA Analysis • Surround Speaker Calibration", cert_item_style),
            Paragraph("<b>AV Infrastructure & Operations:</b><br/>Lightware AV-over-IP (Level 1 Certified) • IP Multicast & IGMP Protocols • PTP Clock Synchronization • Multi-Site Fleet Operations • Preventive Maintenance SOPs • Vendor RMA & Logistics", cert_item_style)
        ]
    ]

    skills_table = Table(skills_data, colWidths=[3.0*inch, 3.0*inch])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 10),
        ('BACKGROUND', (0,0), (-1,-1), COLOR_BG_LIGHT),
        ('BOX', (0,0), (-1,-1), 0.5, COLOR_LINE),
        ('INNERGRID', (0,0), (-1,-1), 0.5, COLOR_LINE),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 8))

    # ═════════════════════════════════════════════════════════════
    # FOOTER
    # ═════════════════════════════════════════════════════════════

    story.append(Spacer(1, 12))
    story.append(HRFlowable(width="100%", thickness=0.5, color=COLOR_LINE, spaceBefore=0, spaceAfter=8))

    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=COLOR_LIGHT,
        alignment=TA_CENTER
    )
    story.append(Paragraph(
        "Professional portfolio: mukesh-portfolio.vercel.app • Full project details and references available upon request.",
        footer_style
    ))

    # Build PDF
    doc.build(story)
    print(f"✓ Optimized professional resume generated: {pdf_path}")
    print(f"✓ File size: {os.path.getsize(pdf_path) / 1024:.1f} KB")
    print(f"✓ Certification section layout fixed with 2-column table")
    print(f"✓ All content stays within page boundaries")

if __name__ == "__main__":
    create_optimized_resume()
