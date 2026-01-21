
function formatDate(dateString) {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('ms-MY', options);
}

function renderTemplateHTML(templateId, data) {
    // Determine which template logic to use
    // For now, we will have a few base layouts and many color variations
    
    const colors = [
        { primary: '#003366', secondary: '#f0f8ff', accent: '#ff0000', text: '#333' }, // 1. Blue (Example)
        { primary: '#800000', secondary: '#fff5f5', accent: '#ffcc00', text: '#333' }, // 2. Red
        { primary: '#006400', secondary: '#f0fff0', accent: '#ff9900', text: '#333' }, // 3. Green
        { primary: '#4b0082', secondary: '#f8f0ff', accent: '#ff00ff', text: '#333' }, // 4. Indigo
        { primary: '#333333', secondary: '#f0f0f0', accent: '#000000', text: '#333' }, // 5. Monochrome
        { primary: '#ff4500', secondary: '#fff0e0', accent: '#2e8b57', text: '#333' }, // 6. Orange
        { primary: '#2f4f4f', secondary: '#e0eeee', accent: '#dc143c', text: '#333' }, // 7. Slate
        { primary: '#8b4513', secondary: '#faf0e6', accent: '#daa520', text: '#333' }, // 8. Brown
        { primary: '#000080', secondary: '#e6e6fa', accent: '#ff1493', text: '#333' }, // 9. Navy
        { primary: '#191970', secondary: '#f5f5f5', accent: '#ffd700', text: '#333' }, // 10. Midnight
        
        // More variations
        { primary: '#008b8b', secondary: '#e0ffff', accent: '#ff4500', text: '#333' }, // 11. Dark Cyan
        { primary: '#556b2f', secondary: '#f5f5dc', accent: '#8b0000', text: '#333' }, // 12. Dark Olive
        { primary: '#9932cc', secondary: '#ffeafa', accent: '#4b0082', text: '#333' }, // 13. Dark Orchid
        { primary: '#8b0000', secondary: '#ffe4e1', accent: '#000080', text: '#333' }, // 14. Dark Red
        { primary: '#e9967a', secondary: '#fff5ee', accent: '#8b4513', text: '#333' }, // 15. Dark Salmon
        { primary: '#483d8b', secondary: '#e6e6fa', accent: '#4b0082', text: '#333' }, // 16. Dark Slate Blue
        { primary: '#2e8b57', secondary: '#f0fff0', accent: '#ff6347', text: '#333' }, // 17. Sea Green
        { primary: '#a0522d', secondary: '#fff5ee', accent: '#800000', text: '#333' }, // 18. Sienna
        { primary: '#008080', secondary: '#f0ffff', accent: '#ff0000', text: '#333' }, // 19. Teal
        { primary: '#000000', secondary: '#ffffff', accent: '#ffcc00', text: '#333' }  // 20. High Contrast
    ];

    const colorScheme = colors[(templateId - 1) % colors.length];
    
    // Layouts:
    // 1-5: Sidebar Right (Standard)
    // 6-10: Sidebar Left
    // 11-15: Bottom Gallery
    // 16-20: Modern Grid
    
    let layoutType = 'sidebar-right';
    if (templateId > 5 && templateId <= 10) layoutType = 'sidebar-left';
    if (templateId > 10 && templateId <= 15) layoutType = 'bottom-gallery';
    if (templateId > 15) layoutType = 'modern-grid';

    return getTemplateMarkup(layoutType, colorScheme, data);
}

function getTemplateMarkup(layout, colors, data) {
    const { primary, secondary, accent, text } = colors;
    
    // Process lists
    const pencapaianHtml = data.pencapaian.map(item => `<li>${item}</li>`).join('');
    const ulasanHtml = data.ulasan.map(item => `<li>${item}</li>`).join('');
    
    // Process images (fill with placeholders if missing)
    const imgs = [...data.images];
    // Ensure we have 6 images
    for(let i=0; i<6; i++) {
        if(!imgs[i]) imgs[i] = ''; // Empty string or placeholder
    }

    const css = `
    .opr-container {
        font-family: 'Arial', sans-serif;
        color: ${text};
        background-color: white;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #ddd;
    }
    
    .opr-header-banner {
        background-color: ${primary};
        color: white;
        padding: 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .logo-container {
        display: flex;
        gap: 10px;
        position: absolute;
        left: 10px;
    }
    
    .logo-container img { height: 50px; }
    
    .school-name {
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        flex-grow: 1;
        text-align: center;
    }
    
    .opr-title {
        text-align: center;
        color: ${accent};
        font-size: 22px;
        font-weight: 800;
        margin: 10px 0;
        text-transform: uppercase;
        border-bottom: 2px solid ${primary};
        padding-bottom: 5px;
        margin-left: 20px;
        margin-right: 20px;
    }
    
    .content-wrapper {
        display: flex;
        flex-grow: 1;
        padding: 10px;
        gap: 10px;
    }
    
    /* Layout Variations */
    .layout-sidebar-right { flex-direction: row; }
    .layout-sidebar-left { flex-direction: row-reverse; }
    .layout-bottom-gallery { flex-direction: column; }
    .layout-modern-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto 1fr; gap: 10px; padding: 10px; }
    
    .main-column {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .sidebar-column {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .info-box {
        border: 1px solid ${primary};
        background-color: ${secondary};
        padding: 0;
        margin-bottom: 5px;
    }
    
    .box-header {
        background-color: ${secondary};
        color: black;
        font-weight: bold;
        text-align: center;
        padding: 5px;
        border-bottom: 1px solid ${primary};
        font-size: 14px;
        text-transform: uppercase;
    }
    
    .box-content {
        padding: 8px;
        font-size: 13px;
        min-height: 30px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .box-content-left {
        padding: 8px;
        font-size: 13px;
        text-align: left;
        align-items: flex-start;
        justify-content: flex-start;
    }
    
    .row-2-cols {
        display: flex;
        gap: 10px;
    }
    
    .row-2-cols > div { flex: 1; }
    
    ul { margin: 0; padding-left: 20px; text-align: left; }
    li { margin-bottom: 3px; }
    
    .photo-frame {
        border: 2px solid ${primary};
        padding: 3px;
        background: white;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    
    .photo-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .footer {
        margin-top: auto;
        text-align: center;
        font-size: 12px;
        color: #555;
        padding: 10px;
    }

    /* Modern Grid Specifics */
    .modern-header { grid-column: 1 / -1; }
    .modern-info { grid-column: 1 / 2; }
    .modern-photos { grid-column: 2 / 3; grid-row: 2 / 4; display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
    
    `;
    
    // HTML Construction based on Layout
    
    let contentHtml = '';
    
    const infoSection = `
        <div class="info-box">
            <div class="box-header">NAMA PROGRAM</div>
            <div class="box-content">${data.program || 'NAMA PROGRAM'}</div>
        </div>
        
        <div class="info-box">
            <div class="box-header">ANJURAN</div>
            <div class="box-content">${data.anjuran}</div>
        </div>
        
        <div class="row-2-cols">
            <div class="info-box">
                <div class="box-header">TARIKH DAN MASA</div>
                <div class="box-content">${data.tarikh ? formatDate(data.tarikh) : ''} <br> ${data.masa}</div>
            </div>
            <div class="info-box">
                <div class="box-header">TEMPAT</div>
                <div class="box-content">${data.tempat}</div>
            </div>
        </div>
        
        <div class="info-box">
            <div class="box-header">BILANGAN PESERTA / KUMPULAN SASARAN</div>
            <div class="box-content">${data.peserta}</div>
        </div>
        
        <div class="info-box">
            <div class="box-header">PENCAPAIAN / REFLEKSI</div>
            <div class="box-content box-content-left">
                <ul>${pencapaianHtml}</ul>
            </div>
        </div>
        
        <div class="info-box">
            <div class="box-header">ULASAN / PENAMBAHBAIKAN</div>
            <div class="box-content box-content-left">
                <ul>${ulasanHtml}</ul>
            </div>
        </div>
        
        <div class="info-box" style="border:none; background:transparent;">
             <div style="font-weight:bold; margin-bottom:5px;">Disediakan oleh:</div>
             <div>${data.disediakan}</div>
             <div>${data.jawatan}</div>
        </div>
    `;

    // Photos logic
    // We have 6 slots.
    // Layout 1 (Sidebar Right): 2 bottom of main, 4 in sidebar.
    // Layout 2 (Sidebar Left): 2 bottom of main, 4 in sidebar.
    // Layout 3 (Bottom Gallery): All 6 at bottom.
    
    const photoFrame = (src) => `
        <div class="photo-frame">
            ${src ? `<img src="${src}">` : '<span style="color:#ccc">Tiada Gambar</span>'}
        </div>
    `;

    if (layout === 'sidebar-right' || layout === 'sidebar-left') {
        const mainPhotos = `
            <div class="row-2-cols">
                ${photoFrame(imgs[0])}
                ${photoFrame(imgs[1])}
            </div>
        `;
        
        const sidebarPhotos = `
            ${photoFrame(imgs[2])}
            ${photoFrame(imgs[3])}
            ${photoFrame(imgs[4])}
            ${photoFrame(imgs[5])}
        `;
        
        contentHtml = `
            <div class="main-column">
                ${infoSection}
                ${mainPhotos}
            </div>
            <div class="sidebar-column">
                ${sidebarPhotos}
            </div>
        `;
    } else if (layout === 'bottom-gallery') {
         contentHtml = `
            <div style="width:100%">
                ${infoSection}
                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-top:10px;">
                    ${imgs.map(img => photoFrame(img)).join('')}
                </div>
            </div>
         `;
    } else if (layout === 'modern-grid') {
        // Just reusing the structure differently via CSS not implemented fully yet, let's fallback to bottom-gallery structure with different CSS
         contentHtml = `
            <div style="width:100%">
                ${infoSection}
                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px; margin-top:10px;">
                    ${imgs.map(img => photoFrame(img)).join('')}
                </div>
            </div>
         `;
    }

    return `
    <style>
        ${css}
    </style>
    <div class="opr-container">
        <div class="opr-header-banner">
            <div class="logo-container">
                 <img src="images/logo.png" onerror="this.src='images/1.png'">
            </div>
            <div class="school-name">SMK TENGKU MUHAMMAD ISMAIL</div>
        </div>
        <div class="opr-title">ONE PAGE REPORT (OPR) <span style="font-size:0.6em; display:block; color:${text}">UNIT ${data.unit.toUpperCase()} TAHUN ${data.year}</span></div>
        
        <div class="content-wrapper layout-${layout}">
            ${contentHtml}
        </div>
        
        <div class="footer">
            #HebatkanTMIS #TogetherWeAreStronger
        </div>
    </div>
    `;
}
