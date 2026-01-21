
function formatDate(dateString) {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    return new Date(dateString).toLocaleDateString('ms-MY', options);
}

// Configuration for 30 Templates
const TEMPLATE_CONFIGS = [
    // 1-5: Curved Right (Organic, Circles on Right)
    { id: 1, type: 'curve-right', colors: { primary: '#660033', secondary: '#f5e6ea', accent: '#a3195b', text: '#333', bg: '#f9f3e6' } }, // Burgundy
    { id: 2, type: 'curve-right', colors: { primary: '#2e7d32', secondary: '#e8f5e9', accent: '#66bb6a', text: '#333', bg: '#f1f8e9' } }, // Green
    { id: 3, type: 'curve-right', colors: { primary: '#0d47a1', secondary: '#e3f2fd', accent: '#42a5f5', text: '#333', bg: '#e1f5fe' } }, // Blue
    { id: 4, type: 'curve-right', colors: { primary: '#4a148c', secondary: '#f3e5f5', accent: '#ab47bc', text: '#333', bg: '#f3e5f5' } }, // Purple
    { id: 5, type: 'curve-right', colors: { primary: '#e65100', secondary: '#fff3e0', accent: '#ff9800', text: '#333', bg: '#fff8e1' } }, // Orange

    // 6-10: Curved Left (Organic, Circles on Left)
    { id: 6, type: 'curve-left', colors: { primary: '#006064', secondary: '#e0f7fa', accent: '#26c6da', text: '#333', bg: '#e0f2f1' } }, // Cyan/Teal
    { id: 7, type: 'curve-left', colors: { primary: '#b71c1c', secondary: '#ffebee', accent: '#ef5350', text: '#333', bg: '#ffebee' } }, // Red
    { id: 8, type: 'curve-left', colors: { primary: '#1a237e', secondary: '#e8eaf6', accent: '#5c6bc0', text: '#333', bg: '#e8eaf6' } }, // Indigo
    { id: 9, type: 'curve-left', colors: { primary: '#3e2723', secondary: '#efebe9', accent: '#8d6e63', text: '#333', bg: '#efebe9' } }, // Brown
    { id: 10, type: 'curve-left', colors: { primary: '#880e4f', secondary: '#fce4ec', accent: '#ec407a', text: '#333', bg: '#fce4ec' } }, // Pink

    // 11-15: Geometric (Angular, Rectangular Photos, Polygons)
    { id: 11, type: 'geometric', colors: { primary: '#01579b', secondary: '#e1f5fe', accent: '#0288d1', text: '#333', bg: '#ffffff' } }, // Blue geometric
    { id: 12, type: 'geometric', colors: { primary: '#1b5e20', secondary: '#e8f5e9', accent: '#43a047', text: '#333', bg: '#ffffff' } }, // Green geometric
    { id: 13, type: 'geometric', colors: { primary: '#b71c1c', secondary: '#ffebee', accent: '#d32f2f', text: '#333', bg: '#ffffff' } }, // Red geometric
    { id: 14, type: 'geometric', colors: { primary: '#f57f17', secondary: '#fffde7', accent: '#fbc02d', text: '#333', bg: '#ffffff' } }, // Yellow/Dark geometric
    { id: 15, type: 'geometric', colors: { primary: '#212121', secondary: '#f5f5f5', accent: '#616161', text: '#333', bg: '#ffffff' } }, // Monochrome geometric

    // 16-20: Modern Grid (Clean, structured, centered)
    { id: 16, type: 'modern-grid', colors: { primary: '#004d40', secondary: '#e0f2f1', accent: '#00897b', text: '#333', bg: '#ffffff' } }, // Teal
    { id: 17, type: 'modern-grid', colors: { primary: '#311b92', secondary: '#ede7f6', accent: '#7e57c2', text: '#333', bg: '#ffffff' } }, // Deep Purple
    { id: 18, type: 'modern-grid', colors: { primary: '#bf360c', secondary: '#fbe9e7', accent: '#ff7043', text: '#333', bg: '#ffffff' } }, // Deep Orange
    { id: 19, type: 'modern-grid', colors: { primary: '#0d47a1', secondary: '#e3f2fd', accent: '#42a5f5', text: '#333', bg: '#ffffff' } }, // Blue
    { id: 20, type: 'modern-grid', colors: { primary: '#263238', secondary: '#eceff1', accent: '#78909c', text: '#333', bg: '#ffffff' } }, // Blue Grey

    // 21-25: Organic Circles (Based on new reference 1)
    { id: 21, type: 'organic-circles', colors: { primary: '#800020', secondary: '#f5f5dc', accent: '#228b22', text: '#333', bg: '#f5f5dc' } }, // Maroon/Beige/Green (Ref)
    { id: 22, type: 'organic-circles', colors: { primary: '#00695c', secondary: '#e0f2f1', accent: '#ffb74d', text: '#333', bg: '#e0f2f1' } }, // Teal/Orange
    { id: 23, type: 'organic-circles', colors: { primary: '#303f9f', secondary: '#e8eaf6', accent: '#ff4081', text: '#333', bg: '#e8eaf6' } }, // Indigo/Pink
    { id: 24, type: 'organic-circles', colors: { primary: '#5d4037', secondary: '#efebe9', accent: '#ffab00', text: '#333', bg: '#efebe9' } }, // Brown/Amber
    { id: 25, type: 'organic-circles', colors: { primary: '#4527a0', secondary: '#ede7f6', accent: '#00bfa5', text: '#333', bg: '#ede7f6' } }, // Deep Purple/Teal

    // 26-30: Floating Circles (Based on new reference 2)
    { id: 26, type: 'floating-circles', colors: { primary: '#1565c0', secondary: '#e3f2fd', accent: '#90caf9', text: '#333', bg: '#ffffff' } }, // Blue (Ref)
    { id: 27, type: 'floating-circles', colors: { primary: '#c62828', secondary: '#ffebee', accent: '#ef9a9a', text: '#333', bg: '#ffffff' } }, // Red
    { id: 28, type: 'floating-circles', colors: { primary: '#2e7d32', secondary: '#e8f5e9', accent: '#a5d6a7', text: '#333', bg: '#ffffff' } }, // Green
    { id: 29, type: 'floating-circles', colors: { primary: '#6a1b9a', secondary: '#f3e5f5', accent: '#ce93d8', text: '#333', bg: '#ffffff' } }, // Purple
    { id: 30, type: 'floating-circles', colors: { primary: '#424242', secondary: '#f5f5f5', accent: '#bdbdbd', text: '#333', bg: '#ffffff' } }, // Grey
];

function renderTemplateHTML(templateId, data) {
    const config = TEMPLATE_CONFIGS.find(c => c.id == templateId) || TEMPLATE_CONFIGS[0];
    
    // Normalize data (ensure 6 images)
    const imgs = [...data.images];
    for(let i=0; i<6; i++) {
        if(!imgs[i]) imgs[i] = ''; 
    }
    
    // Prepare HTML lists
    const pencapaianHtml = data.pencapaian.map(item => `<li>${item}</li>`).join('');
    const ulasanHtml = data.ulasan.map(item => `<li>${item}</li>`).join('');

    // Generate specific layout HTML
    let layoutHtml = '';
    
    if (config.type === 'curve-right') {
        layoutHtml = generateCurveRightLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    } else if (config.type === 'curve-left') {
        layoutHtml = generateCurveLeftLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    } else if (config.type === 'geometric') {
        layoutHtml = generateGeometricLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    } else if (config.type === 'organic-circles') {
        layoutHtml = generateOrganicCirclesLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    } else if (config.type === 'floating-circles') {
        layoutHtml = generateFloatingCirclesLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    } else {
        layoutHtml = generateModernGridLayout(config, data, imgs, pencapaianHtml, ulasanHtml);
    }

    return `
    <style>
        .opr-container {
            font-family: 'Arial', sans-serif;
            color: ${config.colors.text};
            background-color: ${config.colors.bg};
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }
        ul { margin: 0; padding-left: 15px; }
        li { margin-bottom: 2px; }
        img { object-fit: cover; width: 100%; height: 100%; }
        ${layoutHtml.css}
    </style>
    <div class="opr-container">
        ${layoutHtml.html}
    </div>
    `;
}

function generateCurveRightLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    const { primary, secondary, accent, bg } = config.colors;
    
    const css = `
        .bg-shape-top { position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; background: ${primary}; opacity: 0.1; border-radius: 50%; z-index: 0; }
        .bg-shape-bottom { position: absolute; bottom: 0; left: 0; width: 100%; height: 120px; background: ${primary}; border-top-left-radius: 60% 80px; border-top-right-radius: 40% 60px; z-index: 1; }
        .bg-shape-bottom-2 { position: absolute; bottom: 0; left: 0; width: 100%; height: 160px; background: ${accent}; opacity: 0.4; border-top-left-radius: 30% 100px; border-top-right-radius: 70% 50px; z-index: 0; }
        .middle-bar { position: absolute; top: 250px; left: 0; width: 60%; height: 20px; background: ${primary}; z-index: 0; }
        .header-section { padding: 30px; position: relative; z-index: 1; width: 60%; }
        .opr-big-text { font-family: 'Impact', 'Arial Black', sans-serif; font-size: 80px; color: ${primary}; line-height: 0.8; margin-bottom: 10px; text-transform: uppercase; }
        .title-text { font-family: 'Arial Black', sans-serif; font-size: 28px; color: black; text-transform: uppercase; line-height: 1.1; }
        .date-text { font-family: 'Arial Black', sans-serif; font-size: 24px; color: ${primary}; text-transform: uppercase; }
        .content-section { display: flex; flex-direction: row; height: 100%; position: relative; z-index: 1; }
        .left-col { width: 45%; padding: 20px 30px; display: flex; flex-direction: column; gap: 15px; }
        .right-col { width: 55%; position: relative; }
        .section-title { font-weight: bold; font-size: 18px; color: black; margin-bottom: 5px; }
        .section-text { font-size: 12px; color: #444; line-height: 1.3; }
        .circle-photo { position: absolute; border-radius: 50%; border: 8px solid ${primary}; overflow: hidden; background: #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .cp-1 { width: 320px; height: 320px; top: 20px; right: -50px; z-index: 3; }
        .cp-2 { width: 260px; height: 260px; top: 280px; right: 80px; z-index: 2; border-color: ${accent}; }
        .cp-3 { width: 200px; height: 200px; top: 480px; right: -20px; z-index: 3; }
        .logo-top-right { position: absolute; top: 20px; right: 20px; display: flex; gap: 10px; z-index: 10; }
        .logo-top-right img { width: auto; height: 60px; object-fit: contain; }
    `;
    
    const html = `
        <div class="bg-shape-top"></div>
        <div class="bg-shape-bottom-2"></div>
        <div class="bg-shape-bottom"></div>
        <div class="middle-bar"></div>
        <div class="logo-top-right">
             <img src="images/logo.png" onerror="this.src='images/1.png'">
             <img src="images/2.png" onerror="this.style.display='none'">
        </div>
        <div class="header-section">
            <div class="opr-big-text">OPR</div>
            <div class="title-text">${data.program || 'TAJUK PROGRAM'}</div>
            <div class="date-text">${data.tarikh ? formatDate(data.tarikh) : 'TARIKH/HARI'}</div>
        </div>
        <div class="content-section">
            <div class="left-col">
                 <div style="background:${primary}; height:5px; width:100%; margin-bottom:10px;"></div>
                 <div><div class="section-title">Objektif</div><div class="section-text">${data.objektif || 'Paving the way for innovation.'}</div></div>
                 <div><div class="section-title">Aktiviti</div><div class="section-text">${data.aktiviti || 'Detailed activity description here.'}</div></div>
                 <div><div class="section-title">Impak</div><div class="section-text"><ul>${pencapaianHtml}</ul></div></div>
                 <div><div class="section-title">Maklumat Tambahan</div><div class="section-text"><b>Anjuran:</b> ${data.anjuran}<br><b>Tempat:</b> ${data.tempat}<br><b>Peserta:</b> ${data.peserta}</div></div>
            </div>
            <div class="right-col">
                <div class="circle-photo cp-1">${imgs[0] ? `<img src="${imgs[0]}">` : ''}</div>
                <div class="circle-photo cp-2">${imgs[1] ? `<img src="${imgs[1]}">` : ''}</div>
                <div class="circle-photo cp-3">${imgs[2] ? `<img src="${imgs[2]}">` : ''}</div>
            </div>
        </div>
        <div style="position:absolute; bottom:10px; right:10px; z-index:10; text-align:right;"><div style="font-size:10px; color:white;">Disediakan oleh: ${data.disediakan}</div></div>
    `;
    return { css, html };
}


function generateCurveLeftLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    const { primary, secondary, accent, bg } = config.colors;
    
    const css = `
        .bg-shape-top { position: absolute; top: -50px; left: -50px; width: 400px; height: 400px; background: ${primary}; opacity: 0.1; border-radius: 50%; z-index: 0; }
        .bg-shape-bottom { position: absolute; bottom: 0; right: 0; width: 100%; height: 120px; background: ${primary}; border-top-right-radius: 60% 80px; border-top-left-radius: 40% 60px; z-index: 1; }
        .bg-shape-bottom-2 { position: absolute; bottom: 0; right: 0; width: 100%; height: 160px; background: ${accent}; opacity: 0.4; border-top-right-radius: 30% 100px; border-top-left-radius: 70% 50px; z-index: 0; }
        .middle-bar { position: absolute; top: 250px; right: 0; width: 60%; height: 20px; background: ${primary}; z-index: 0; }
        .header-section { padding: 30px; position: relative; z-index: 1; width: 60%; margin-left: auto; text-align: right; }
        .opr-big-text { font-family: 'Impact', 'Arial Black', sans-serif; font-size: 80px; color: ${primary}; line-height: 0.8; margin-bottom: 10px; text-transform: uppercase; }
        .title-text { font-family: 'Arial Black', sans-serif; font-size: 28px; color: black; text-transform: uppercase; line-height: 1.1; }
        .content-section { display: flex; flex-direction: row-reverse; height: 100%; position: relative; z-index: 1; }
        .left-col { width: 50%; padding: 20px 30px; display: flex; flex-direction: column; gap: 15px; text-align: right; }
        .right-col { width: 50%; position: relative; }
        .section-title { font-weight: bold; font-size: 18px; color: ${primary}; margin-bottom: 5px; border-bottom: 2px solid ${accent}; display: inline-block; }
        .circle-photo { position: absolute; border-radius: 50%; border: 6px solid ${primary}; overflow: hidden; background: #ddd; box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .cp-1 { width: 300px; height: 300px; top: 0px; left: -40px; z-index: 2; }
        .cp-2 { width: 240px; height: 240px; top: 240px; left: 50px; z-index: 3; border-color: ${accent}; }
        .cp-3 { width: 180px; height: 180px; top: 450px; left: -20px; z-index: 2; }
        .logo-top-left { position: absolute; top: 20px; left: 20px; display: flex; gap: 10px; z-index: 10; }
        .logo-top-left img { width: auto; height: 60px; object-fit: contain; }
    `;
    
    const html = `
        <div class="bg-shape-top"></div>
        <div class="bg-shape-bottom-2"></div>
        <div class="bg-shape-bottom"></div>
        <div class="middle-bar"></div>
        <div class="logo-top-left"> <img src="images/logo.png" onerror="this.src='images/1.png'"> <img src="images/2.png" onerror="this.style.display='none'"> </div>
        <div class="header-section">
            <div class="opr-big-text">OPR</div>
            <div class="title-text">${data.program || 'TAJUK PROGRAM'}</div>
            <div style="font-size:20px; color:${accent}; font-weight:bold;">${data.tarikh ? formatDate(data.tarikh) : 'TARIKH'}</div>
        </div>
        <div class="content-section">
            <div class="left-col">
                 <div><div class="section-title">Objektif</div><div style="font-size:12px;">${data.objektif || 'Objektif program...'}</div></div>
                 <div><div class="section-title">Pencapaian</div><div style="font-size:12px;"><ul>${pencapaianHtml}</ul></div></div>
                 <div><div class="section-title">Maklumat</div><div style="font-size:12px;">${data.anjuran}<br>${data.tempat}</div></div>
            </div>
            <div class="right-col">
                <div class="circle-photo cp-1">${imgs[0] ? `<img src="${imgs[0]}">` : ''}</div>
                <div class="circle-photo cp-2">${imgs[1] ? `<img src="${imgs[1]}">` : ''}</div>
                <div class="circle-photo cp-3">${imgs[2] ? `<img src="${imgs[2]}">` : ''}</div>
            </div>
        </div>
        <div style="position:absolute; bottom:0; left:0; width:100%; height:80px; background:${primary}; display:flex; align-items:center; justify-content:center; color:white;">#HebatkanTMIS</div>
    `;
    return { css, html };
}

function generateGeometricLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    const { primary, secondary, accent, bg } = config.colors;
    
    const css = `
        .geo-bg { position: absolute; width: 100%; height: 100%; z-index: 0; background: linear-gradient(135deg, ${secondary} 0%, white 100%); }
        .geo-shape-1 { position: absolute; top: 0; left: 0; width: 100%; height: 200px; background: ${primary}; clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); z-index: 1; }
        .geo-logos { position: absolute; top: 10px; right: 10px; display: flex; gap: 10px; z-index: 10; }
        .geo-logos img { height: 50px; background:white; padding:2px; border-radius:4px; }
        .geo-shape-2 { position: absolute; bottom: 0; right: 0; width: 60%; height: 300px; background: ${accent}; opacity: 0.2; clip-path: polygon(0 100%, 100% 100%, 100% 0); z-index: 0; }
        .main-frame { position: relative; z-index: 2; padding: 20px; display: flex; flex-direction: column; height: 100%; gap: 15px; }
        .header-box { background: white; padding: 15px; border-left: 10px solid ${accent}; box-shadow: 0 5px 15px rgba(0,0,0,0.1); margin-top: 80px; display: flex; justify-content: space-between; align-items: center; }
        .photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 120px); gap: 10px; }
        .photo-item { border: 2px dashed ${primary}; padding: 3px; background: white; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; background: rgba(255,255,255,0.9); padding: 15px; border-radius: 8px; flex-grow: 1; }
        .info-card h3 { background: ${primary}; color: white; padding: 5px 10px; font-size: 14px; margin: 0 0 5px 0; text-transform: uppercase; }
        .info-card div { font-size: 12px; padding: 5px; }
    `;

    const html = `
        <div class="geo-bg"></div>
        <div class="geo-shape-1"> <div style="padding:20px; color:white; font-size:24px; font-weight:bold;"> SMK TENGKU MUHAMMAD ISMAIL </div> </div>
        <div class="geo-logos"> <img src="images/logo.png" onerror="this.src='images/1.png'"> <img src="images/2.png" onerror="this.style.display='none'"> </div>
        <div class="geo-shape-2"></div>
        <div class="main-frame">
            <div class="header-box">
                <div> <h1 style="margin:0; font-size:24px; color:${primary}; text-transform:uppercase;">${data.program}</h1> <div style="color:#666;">ONE PAGE REPORT (OPR)</div> </div>
                <div style="text-align:right;"> <div style="font-weight:bold; font-size:18px;">${data.tarikh ? formatDate(data.tarikh) : ''}</div> <div>${data.tempat}</div> </div>
            </div>
            <div class="info-grid">
                <div class="info-card"> <h3>Objektif</h3> <div>${data.objektif}</div> </div>
                <div class="info-card"> <h3>Impak / Pencapaian</h3> <div><ul>${pencapaianHtml}</ul></div> </div>
                <div class="info-card" style="grid-column: 1 / -1;"> <h3>Ulasan</h3> <div><ul>${ulasanHtml}</ul></div> </div>
            </div>
            <div class="photo-grid"> ${imgs.map(img => `<div class="photo-item">${img ? `<img src="${img}">` : ''}</div>`).join('')} </div>
        </div>
    `;
    return { css, html };
}

function generateModernGridLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    const { primary, secondary, accent, bg, text } = config.colors;
    
    const css = `
        .header { background: ${primary}; color: white; padding: 20px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .container { padding: 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; height: 100%; }
        .info-bar { width: 100%; text-align: center; border-bottom: 2px solid ${accent}; padding-bottom: 10px; margin-bottom: 10px; color: ${primary}; font-weight: bold; }
        .center-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 100%; max-width: 900px; }
        .img-frame { background: #eee; border: 2px solid ${primary}; aspect-ratio: 4/3; overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .text-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; width: 100%; }
        .box { border: 1px solid ${primary}; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .box-head { background: ${secondary}; color: ${primary}; font-weight: bold; padding: 8px; text-align: center; text-transform: uppercase; font-size: 14px; }
        .box-body { padding: 10px; font-size: 12px; text-align: justify; }
    `;

    const html = `
        <div class="header">
            <div style="display:flex; align-items:center; gap:20px;">
                <img src="images/logo.png" onerror="this.src='images/1.png'" style="height:60px; background:white; border-radius:50%;">
                <div style="text-align:center;">
                    <h1 style="margin:0; font-size:32px; text-transform:uppercase;">${data.program}</h1>
                    <div style="font-size:16px; margin-top:5px;">SMK TENGKU MUHAMMAD ISMAIL</div>
                </div>
                 <img src="images/2.png" onerror="this.style.display='none'" style="height:60px;">
            </div>
        </div>
        <div class="container">
            <div class="info-bar"> ${data.tarikh ? formatDate(data.tarikh) : 'TARIKH'} | ${data.tempat} | ${data.anjuran} </div>
            <div class="center-images">
                <div class="img-frame" style="grid-column: span 2; grid-row: span 2;">${imgs[0] ? `<img src="${imgs[0]}">` : ''}</div>
                <div class="img-frame">${imgs[1] ? `<img src="${imgs[1]}">` : ''}</div>
                <div class="img-frame">${imgs[2] ? `<img src="${imgs[2]}">` : ''}</div>
            </div>
            <div class="text-grid">
                <div class="box"> <div class="box-head">Objektif</div> <div class="box-body">${data.objektif}</div> </div>
                <div class="box"> <div class="box-head">Aktiviti / Ulasan</div> <div class="box-body"> ${data.aktiviti}<br><br> <ul>${ulasanHtml}</ul> </div> </div>
                <div class="box"> <div class="box-head">Impak / Refleksi</div> <div class="box-body"><ul>${pencapaianHtml}</ul></div> </div>
            </div>
        </div>
    `;
    return { css, html };
}

function generateOrganicCirclesLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    // Based on template image 504754076
    const { primary, secondary, accent, bg } = config.colors;
    
    const css = `
        .org-header { font-family: 'Impact', sans-serif; font-size: 80px; color: ${primary}; line-height: 1; padding: 20px 40px; margin-top: 20px; text-transform: uppercase; }
        .org-title { font-size: 30px; font-weight: bold; color: black; padding-left: 40px; text-transform: uppercase; width: 50%; }
        .org-date { font-size: 24px; font-weight: bold; color: ${primary}; padding-left: 40px; margin-bottom: 20px; }
        .org-bar { width: 100%; height: 30px; background: ${primary}; margin: 20px 0; }
        
        .org-container { display: flex; position: relative; height: 100%; }
        .org-left { width: 45%; padding: 20px 40px; }
        .org-right { width: 55%; position: relative; }
        
        .org-section { margin-bottom: 20px; }
        .org-h3 { font-size: 20px; font-weight: bold; color: black; margin-bottom: 5px; }
        .org-text { font-size: 14px; color: #555; }
        
        /* Wavy footer */
        .org-footer-bg { position: absolute; bottom: 0; left: 0; width: 100%; height: 150px; background: ${accent}; z-index: 0; 
            clip-path: ellipse(80% 100% at 50% 100%); }
            
        /* Circles on the right */
        .org-circle { position: absolute; border-radius: 50%; border: 10px solid ${primary}; overflow: hidden; background: #eee; z-index: 5; box-shadow: 5px 5px 15px rgba(0,0,0,0.3); }
        .oc-1 { width: 350px; height: 350px; top: 0; right: -50px; z-index: 5; }
        .oc-2 { width: 300px; height: 300px; top: 280px; right: 80px; z-index: 4; border-color: ${accent}; }
        .oc-3 { width: 220px; height: 220px; top: 520px; right: 0px; z-index: 5; }
        
        .org-dots { position: absolute; top: 500px; right: 350px; width: 40px; height: 40px; background: ${primary}; border-radius: 50%; }
        
        .org-logo { position: absolute; top: 20px; right: 20px; display: flex; gap: 10px; }
        .org-logo img { height: 60px; }
    `;
    
    const html = `
        <div class="org-logo">
             <img src="images/logo.png" onerror="this.src='images/1.png'">
             <img src="images/2.png" onerror="this.style.display='none'">
        </div>
        
        <div class="org-header">OPR</div>
        <div class="org-title">${data.program || 'TAJUK PROGRAM'}</div>
        <div class="org-date">${data.tarikh ? formatDate(data.tarikh) : 'TARIKH'}</div>
        
        <div class="org-bar"></div>
        
        <div class="org-container">
            <div class="org-left">
                <div class="org-section">
                    <div class="org-h3">Objektif</div>
                    <div class="org-text">${data.objektif}</div>
                </div>
                <div class="org-section">
                    <div class="org-h3">Aktiviti</div>
                    <div class="org-text">${data.aktiviti}</div>
                </div>
                <div class="org-section">
                    <div class="org-h3">Impak</div>
                    <div class="org-text"><ul>${pencapaianHtml}</ul></div>
                </div>
                <div class="org-section">
                    <div class="org-h3">Ulasan</div>
                    <div class="org-text"><ul>${ulasanHtml}</ul></div>
                </div>
            </div>
            
            <div class="org-right">
                <div class="org-circle oc-1">${imgs[0] ? `<img src="${imgs[0]}">` : ''}</div>
                <div class="org-circle oc-2">${imgs[1] ? `<img src="${imgs[1]}">` : ''}</div>
                <div class="org-circle oc-3">${imgs[2] ? `<img src="${imgs[2]}">` : ''}</div>
                <div class="org-dots"></div>
            </div>
        </div>
        
        <div class="org-footer-bg"></div>
    `;
    return { css, html };
}

function generateFloatingCirclesLayout(config, data, imgs, pencapaianHtml, ulasanHtml) {
    // Based on template image 504538486 (Blue waves, center circles)
    const { primary, secondary, accent, bg } = config.colors;
    
    const css = `
        .fl-top-curve { position: absolute; top: 0; left: 0; width: 100%; height: 250px; background: ${primary}; clip-path: ellipse(80% 70% at 50% 0%); z-index: 0; }
        .fl-bottom-curve { position: absolute; bottom: 0; left: 0; width: 100%; height: 200px; background: ${accent}; clip-path: ellipse(60% 80% at 70% 100%); z-index: 0; opacity: 0.5; }
        .fl-bottom-curve-2 { position: absolute; bottom: 0; left: 0; width: 100%; height: 150px; background: ${primary}; clip-path: ellipse(50% 100% at 30% 100%); z-index: 1; }
        
        .fl-content { position: relative; z-index: 10; padding: 40px; display: flex; flex-direction: column; height: 100%; }
        
        .fl-header { text-align: center; color: white; margin-bottom: 40px; }
        .fl-h1 { font-size: 50px; font-weight: bold; margin: 0; text-transform: uppercase; }
        .fl-h2 { font-size: 24px; margin: 5px 0; }
        
        .fl-body { display: flex; flex-direction: column; gap: 20px; }
        
        .fl-row { display: flex; gap: 20px; align-items: center; }
        .fl-box { background: rgba(255,255,255,0.9); padding: 15px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); flex: 1; border-left: 5px solid ${primary}; }
        
        .fl-circles-container { position: absolute; top: 300px; right: -50px; width: 600px; height: 600px; z-index: 2; pointer-events: none; }
        .fl-circle-img { position: absolute; border-radius: 50%; border: 8px solid white; overflow: hidden; box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
        
        .fl-c1 { width: 350px; height: 350px; top: 0; right: 100px; z-index: 5; }
        .fl-c2 { width: 250px; height: 250px; top: 250px; right: 250px; z-index: 4; border-color: ${secondary}; }
        
        /* Adjust content width to not overlap with circles too much */
        .fl-left-content { width: 50%; display: flex; flex-direction: column; gap: 20px; margin-top: 150px; }
        
        .fl-label { font-weight: bold; color: ${primary}; text-transform: uppercase; margin-bottom: 5px; }
        
        .fl-logos { position: absolute; top: 20px; right: 20px; z-index: 20; background: white; padding: 5px; border-radius: 20px; }
        .fl-logos img { height: 50px; }
    `;
    
    const html = `
        <div class="fl-top-curve"></div>
        <div class="fl-bottom-curve"></div>
        <div class="fl-bottom-curve-2"></div>
        
        <div class="fl-logos">
             <img src="images/logo.png" onerror="this.src='images/1.png'">
             <img src="images/2.png" onerror="this.style.display='none'">
        </div>
        
        <div class="fl-content">
            <div class="fl-header">
                <div style="font-size:20px; opacity:0.8;">LAPORAN PROGRAM</div>
                <div class="fl-h1">OPR</div>
                <div class="fl-h2">${data.program}</div>
                <div>${data.tarikh ? formatDate(data.tarikh) : ''} | ${data.tempat}</div>
            </div>
            
            <div class="fl-left-content">
                 <div class="fl-box">
                    <div class="fl-label">Objektif</div>
                    <div>${data.objektif}</div>
                 </div>
                 
                 <div class="fl-box">
                    <div class="fl-label">Aktiviti</div>
                    <div>${data.aktiviti}</div>
                 </div>
                 
                 <div class="fl-box">
                    <div class="fl-label">Impak</div>
                    <div><ul>${pencapaianHtml}</ul></div>
                 </div>

                 <div class="fl-box">
                    <div class="fl-label">Ulasan</div>
                    <div><ul>${ulasanHtml}</ul></div>
                 </div>
            </div>
        </div>
        
        <div class="fl-circles-container">
             <div class="fl-circle-img fl-c1">${imgs[0] ? `<img src="${imgs[0]}">` : ''}</div>
             <div class="fl-circle-img fl-c2">${imgs[1] ? `<img src="${imgs[1]}">` : ''}</div>
        </div>
    `;
    return { css, html };
}
