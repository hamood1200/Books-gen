/* @ds-bundle: {"format":4,"namespace":"NajdeahBooksDesignSystem_05cd8e","components":[{"name":"AuthorBio","sourcePath":"components/book/AuthorBio.jsx"},{"name":"BodyText","sourcePath":"components/book/BodyText.jsx"},{"name":"BookCover","sourcePath":"components/book/BookCover.jsx"},{"name":"BookPage","sourcePath":"components/book/BookPage.jsx"},{"name":"BulletList","sourcePath":"components/book/BulletList.jsx"},{"name":"FigureBlock","sourcePath":"components/book/FigureBlock.jsx"},{"name":"PageFolio","sourcePath":"components/book/PageFolio.jsx"},{"name":"PartOpener","sourcePath":"components/book/PartOpener.jsx"},{"name":"RunningHeader","sourcePath":"components/book/RunningHeader.jsx"},{"name":"SectionHeading","sourcePath":"components/book/SectionHeading.jsx"},{"name":"SpecTable","sourcePath":"components/book/SpecTable.jsx"},{"name":"SubHeading","sourcePath":"components/book/SubHeading.jsx"},{"name":"TocList","sourcePath":"components/book/TocList.jsx"}],"sourceHashes":{"components/book/AuthorBio.jsx":"9f7f36fedfa5","components/book/BodyText.jsx":"78543395cded","components/book/BookCover.jsx":"99536794d054","components/book/BookPage.jsx":"2cb48105ff77","components/book/BulletList.jsx":"dfc94458c4e2","components/book/FigureBlock.jsx":"3e2696467b77","components/book/PageFolio.jsx":"97fbaac130a8","components/book/PartOpener.jsx":"120f763c7036","components/book/RunningHeader.jsx":"dd7caa07a970","components/book/SectionHeading.jsx":"5ca10d6b1873","components/book/SpecTable.jsx":"e75449ecaa69","components/book/SubHeading.jsx":"b7d18513e409","components/book/TocList.jsx":"8822e3f075b6","ui_kits/guide-book/AuthorScreen.jsx":"02ada29cb511","ui_kits/guide-book/ChapterScreen.jsx":"f2026575f4da","ui_kits/guide-book/ContentsScreen.jsx":"2d5817435bfb","ui_kits/guide-book/CoverScreen.jsx":"955d2ffe3533","ui_kits/guide-book/OpenerScreen.jsx":"d7748811528e","ui_kits/guide-book/ReportScreen.jsx":"b74cacbef3c9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NajdeahBooksDesignSystem_05cd8e = window.NajdeahBooksDesignSystem_05cd8e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/book/AuthorBio.jsx
try { (() => {
/* Author page: photo band, cream capsule label, justified bio, orange closing rule. */
function AuthorBio({
  label = 'About the author:',
  photoSrc,
  children,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("div", {
    dir: ar ? 'rtl' : undefined,
    style: {
      display: 'grid',
      gap: 'var(--space-6)',
      ...style
    }
  }, photoSrc && /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: "",
    style: {
      width: '100%',
      height: 96,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--najdeah-cream)',
      color: 'var(--text-body)',
      font: `var(--weight-bold) var(--text-h3)/${ar ? '1.5' : '1.2'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      padding: '5px 22px'
    }
  }, label)), /*#__PURE__*/React.createElement("div", null, children), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 'var(--border-width-rule)',
      background: 'var(--border-rule-accent)',
      margin: 0
    }
  }));
}
Object.assign(__ds_scope, { AuthorBio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/AuthorBio.jsx", error: String((e && e.message) || e) }); }

// components/book/BodyText.jsx
try { (() => {
/* Justified serif body paragraph. */
function BodyText({
  children,
  align,
  indent = false,
  size,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("p", {
    dir: ar ? 'rtl' : undefined,
    style: {
      margin: '0 0 var(--para-gap)',
      color: 'var(--text-body)',
      font: `var(--weight-regular) ${size || (ar ? 'var(--text-body-size-ar)' : 'var(--text-body-size)')}/${ar ? 'var(--leading-body-ar)' : 'var(--leading-body)'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      textAlign: align || 'var(--align-body)',
      textIndent: indent ? '18px' : 0,
      hyphens: 'auto',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { BodyText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/BodyText.jsx", error: String((e && e.message) || e) }); }

// components/book/BookCover.jsx
try { (() => {
/* Najdeah book front cover — full-bleed photograph with a navy protection gradient.
   Geometry: photo covers the sheet; the gradient darkens the top (for the white logo)
   and the lower third (for the title block); a 64px orange rule opens the title;
   the navy edition bar runs across the foot. */
function BookCover({
  title,
  byline,
  blurb,
  note,
  edition = 'Second Edition',
  year = '2025',
  photoSrc,
  logoSrc,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  const serif = ar ? 'var(--font-arabic)' : 'var(--font-body)';
  return /*#__PURE__*/React.createElement("section", {
    dir: ar ? 'rtl' : undefined,
    style: {
      position: 'relative',
      width: 'var(--page-width)',
      height: 'var(--page-height)',
      overflow: 'hidden',
      background: 'var(--najdeah-navy)',
      boxShadow: 'var(--shadow-page-lifted)',
      ...style
    }
  }, photoSrc && /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-cover-protection)'
    }
  }), logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Najdeah",
    style: {
      position: 'absolute',
      left: 'var(--page-margin-x)',
      top: 26,
      width: 58
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin-x)',
      top: 26,
      color: 'var(--text-on-dark)',
      font: `var(--weight-bold) var(--text-cover-byline)/1 ${serif}`,
      letterSpacing: 'var(--tracking-logotype)'
    }
  }, "NAJDEAH"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--page-margin-x)',
      right: 'var(--page-margin-x)',
      top: '53.5%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 'var(--border-width-rule)',
      background: 'var(--najdeah-orange)',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark)',
      font: `${ar ? 'var(--weight-arabic-black)' : 'var(--weight-display)'} ${ar ? 'var(--text-cover-title-ar)' : 'var(--text-cover-title)'}/${ar ? '1.32' : '1.12'} ${ar ? 'var(--font-arabic-display)' : 'var(--font-display)'}`,
      letterSpacing: ar ? 0 : '-0.01em'
    }
  }, title), byline && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      color: 'var(--text-on-dark)',
      font: `var(--weight-regular) var(--text-cover-byline)/1.4 ${serif}`,
      opacity: 0.92
    }
  }, byline), blurb && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-7) 0 0',
      maxWidth: 270,
      color: 'var(--text-on-dark)',
      opacity: 0.86,
      font: `var(--weight-regular) ${ar ? 'var(--text-body-size-ar)' : 'var(--text-small)'}/${ar ? 'var(--leading-body-ar)' : '1.5'} ${serif}`,
      textAlign: 'justify',
      hyphens: 'auto'
    }
  }, blurb), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      maxWidth: 270,
      textAlign: ar ? 'left' : 'right',
      color: 'var(--text-on-dark)',
      font: `var(--weight-regular) var(--text-small)/1.2 ${serif}`,
      opacity: 0.86
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 34,
      background: 'var(--gradient-navy)',
      color: 'var(--text-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--page-margin-x)',
      font: `var(--weight-regular) var(--text-edition)/1.2 ${serif}`
    }
  }, /*#__PURE__*/React.createElement("span", null, edition), /*#__PURE__*/React.createElement("span", null, year)));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/book/BulletList.jsx
try { (() => {
/* Bulleted list with hanging indent — the guide's dominant content form. */
function BulletList({
  items,
  marker = '•',
  numbered = false,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("ul", {
    dir: ar ? 'rtl' : undefined,
    style: {
      listStyle: 'none',
      margin: '0 0 var(--block-gap)',
      padding: 0,
      display: 'grid',
      gap: 'var(--bullet-gap)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--bullet-indent) 1fr',
      color: 'var(--text-body)',
      font: `var(--weight-regular) ${ar ? 'var(--text-body-size-ar)' : 'var(--text-body-size)'}/${ar ? 'var(--leading-body-ar)' : 'var(--leading-body)'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-body)'
    }
  }, numbered ? `${i + 1}-` : marker), /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/book/FigureBlock.jsx
try { (() => {
/* Screenshot / chart figure with optional caption above or below, as set in the guide. */
function FigureBlock({
  src,
  alt = '',
  caption,
  captionPosition = 'below',
  frame = true,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  const cap = caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: captionPosition === 'above' ? '0 0 var(--space-3)' : 'var(--space-3) 0 0',
      font: `var(--weight-regular) var(--text-caption-size)/${ar ? '1.7' : '1.35'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      color: 'var(--text-caption)'
    }
  }, caption);
  return /*#__PURE__*/React.createElement("figure", {
    dir: ar ? 'rtl' : undefined,
    style: {
      margin: '0 0 var(--block-gap)',
      ...style
    }
  }, captionPosition === 'above' && cap, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      display: 'block',
      border: frame ? '0.5px solid var(--border-hairline)' : 'none'
    }
  }), captionPosition === 'below' && cap);
}
Object.assign(__ds_scope, { FigureBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/FigureBlock.jsx", error: String((e && e.message) || e) }); }

// components/book/PageFolio.jsx
try { (() => {
/* Teal page-number badge, centred at the foot of the page. */
function PageFolio({
  page,
  style
}) {
  /* Folio digits stay in the Latin serif in both languages, as in the source book. */
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--surface-badge)',
      color: 'var(--text-on-dark)',
      font: `var(--weight-bold) var(--text-folio)/1 var(--font-body)`,
      padding: '3px 8px',
      borderRadius: 'var(--radius-badge)',
      minWidth: 18,
      textAlign: 'center'
    }
  }, page));
}
Object.assign(__ds_scope, { PageFolio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/PageFolio.jsx", error: String((e && e.message) || e) }); }

// components/book/PartOpener.jsx
try { (() => {
/* Full-bleed photographic part opener with title and author dash-line. */
function PartOpener({
  title,
  author,
  photoSrc,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  const serif = ar ? 'var(--font-arabic)' : 'var(--font-body)';
  return /*#__PURE__*/React.createElement("section", {
    dir: ar ? 'rtl' : undefined,
    style: {
      position: 'relative',
      width: 'var(--page-width)',
      height: 'var(--page-height)',
      overflow: 'hidden',
      background: 'var(--najdeah-navy)',
      boxShadow: 'var(--shadow-page)',
      ...style
    }
  }, photoSrc && /*#__PURE__*/React.createElement("img", {
    src: photoSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 'var(--space-9) var(--page-margin-x) 0'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark)',
      font: `${ar ? 'var(--weight-bold)' : 'var(--weight-regular)'} var(--text-h1)/${ar ? 'var(--leading-heading-ar)' : 'var(--leading-tight)'} ${ar ? 'var(--font-arabic-display)' : 'var(--font-body)'}`
    }
  }, title), author && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 0',
      color: 'var(--text-on-dark)',
      font: `var(--weight-bold) var(--text-cover-byline)/1.3 ${serif}`
    }
  }, "\u2014 ", author, " \u2014")));
}
Object.assign(__ds_scope, { PartOpener });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/PartOpener.jsx", error: String((e && e.message) || e) }); }

// components/book/RunningHeader.jsx
try { (() => {
/* Alternating running head. Verso: book title, centred. Recto: logo left + author right. */
function RunningHeader({
  side = 'recto',
  title = 'Solar PV Plant Design Guide',
  author = 'Nooralden Najdeah',
  logoSrc,
  lang = 'en',
  style
}) {
  const rule = {
    height: 'var(--border-width-rule)',
    background: 'var(--border-rule-accent)',
    border: 0,
    margin: '3px 0 0'
  };
  const serif = lang === 'ar' ? 'var(--font-arabic)' : 'var(--font-body)';
  if (side === 'verso') {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        font: `var(--weight-regular) var(--text-small)/1.2 ${serif}`,
        color: 'var(--text-body)'
      }
    }, title), /*#__PURE__*/React.createElement("hr", {
      style: {
        ...rule,
        width: '46%',
        margin: '3px auto 0'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      ...style
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Najdeah",
    style: {
      height: 26,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-bold) var(--text-small)/1 ${serif}`,
      letterSpacing: 'var(--tracking-logotype)'
    }
  }, "NAJDEAH"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: '38%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      font: `var(--weight-regular) var(--text-small)/1.2 ${serif}`
    }
  }, author), /*#__PURE__*/React.createElement("hr", {
    style: rule
  })));
}
Object.assign(__ds_scope, { RunningHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/RunningHeader.jsx", error: String((e && e.message) || e) }); }

// components/book/BookPage.jsx
try { (() => {
/* A single book page: fixed A5-proportion sheet, running head, content, folio. */
function BookPage({
  children,
  page,
  side = 'recto',
  title,
  author,
  logoSrc,
  watermarkSrc,
  tint = true,
  lang = 'en',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    dir: lang === 'ar' ? 'rtl' : undefined,
    style: {
      position: 'relative',
      boxSizing: 'border-box',
      width: 'var(--page-width)',
      height: 'var(--page-height)',
      background: tint ? 'var(--gradient-page)' : 'var(--surface-page)',
      boxShadow: 'var(--shadow-page)',
      padding: 'var(--page-margin-top) var(--page-margin-x) var(--page-margin-bottom)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }
  }, watermarkSrc && /*#__PURE__*/React.createElement("img", {
    src: watermarkSrc,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 'var(--opacity-watermark)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.RunningHeader, {
    side: side,
    title: title,
    author: author,
    logoSrc: logoSrc,
    lang: lang,
    style: {
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minHeight: 0,
      paddingTop: 'var(--space-7)'
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.PageFolio, {
    page: page,
    style: {
      position: 'relative'
    }
  }));
}
Object.assign(__ds_scope, { BookPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/BookPage.jsx", error: String((e && e.message) || e) }); }

// components/book/SectionHeading.jsx
try { (() => {
/* Teal capsule section heading — the primary chapter/section marker in Najdeah books. */
function SectionHeading({
  children,
  width = 'auto',
  align = 'left',
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("div", {
    dir: ar ? 'rtl' : undefined,
    style: {
      display: 'flex',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      margin: '0 0 var(--block-gap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: 'var(--surface-heading)',
      color: 'var(--text-heading)',
      font: `var(--weight-bold) ${ar ? 'var(--text-h2-ar)' : 'var(--text-h2)'}/${ar ? 'var(--leading-heading-ar)' : 'var(--leading-heading)'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      letterSpacing: 'var(--tracking-heading)',
      padding: 'var(--heading-capsule-pad-y) var(--heading-capsule-pad-x)',
      borderRadius: 'var(--radius-capsule)',
      width
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/book/SpecTable.jsx
try { (() => {
/* Hairline technical table: optional group rows spanning all columns. */
function SpecTable({
  columns,
  rows,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  const cell = {
    border: '0.5px solid var(--border-table)',
    padding: '2px 4px',
    font: `var(--weight-regular) var(--text-table)/${ar ? '1.6' : '1.3'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
    color: 'var(--text-body)',
    verticalAlign: 'top'
  };
  return /*#__PURE__*/React.createElement("table", {
    dir: ar ? 'rtl' : undefined,
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      textAlign: 'center',
      background: 'var(--surface-table-header)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => r.group ? /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      ...cell,
      textAlign: 'center',
      background: 'var(--surface-table-header)'
    }
  }, r.group)) : /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.cells.map((c, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: cell
  }, c))))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/book/SubHeading.jsx
try { (() => {
/* Orange sub-heading — second level below SectionHeading. */
function SubHeading({
  children,
  tone = 'orange',
  lang = 'en',
  style
}) {
  const color = tone === 'crimson' ? 'var(--najdeah-crimson)' : tone === 'teal' ? 'var(--najdeah-teal)' : 'var(--text-subheading)';
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("p", {
    dir: ar ? 'rtl' : undefined,
    style: {
      margin: '0 0 var(--para-gap)',
      color,
      font: `${ar ? 'var(--weight-bold)' : 'var(--weight-regular)'} var(--text-h3)/${ar ? 'var(--leading-heading-ar)' : 'var(--leading-heading)'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SubHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/SubHeading.jsx", error: String((e && e.message) || e) }); }

// components/book/TocList.jsx
try { (() => {
/* Table of contents: alternating tinted rows, title left, page right. */
function TocList({
  entries,
  lang = 'en',
  style
}) {
  const ar = lang === 'ar';
  return /*#__PURE__*/React.createElement("ol", {
    dir: ar ? 'rtl' : undefined,
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, entries.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      alignItems: 'baseline',
      gap: 'var(--space-5)',
      padding: '4px 10px',
      background: i % 2 ? 'transparent' : 'var(--najdeah-teal-tint)',
      borderRadius: 'var(--radius-capsule)',
      font: `var(--weight-regular) ${ar ? 'var(--text-body-size-ar)' : 'var(--text-body-size)'}/${ar ? 'var(--leading-body-ar)' : 'var(--leading-body)'} ${ar ? 'var(--font-arabic)' : 'var(--font-body)'}`,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, e.title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, e.page))));
}
Object.assign(__ds_scope, { TocList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/book/TocList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/AuthorScreen.jsx
try { (() => {
function AuthorScreen() {
  const {
    BookPage,
    AuthorBio,
    BodyText
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(BookPage, {
    page: 42,
    side: "verso",
    tint: false
  }, /*#__PURE__*/React.createElement(AuthorBio, {
    photoSrc: "../../assets/photo-author-desk.jpg"
  }, /*#__PURE__*/React.createElement(BodyText, {
    indent: true
  }, "Nooralden Najdeah is a renewable energy leader with over 9 years of experience driving large-scale solar projects across the MENA and African regions. Proven success in managing EPC, and PPA projects exceeding 500 MWp, overseeing end-to-end project lifecycle, and delivering strategic partnerships that advance clean energy goals. Strong expertise in project finance, due diligence, technical management, and stakeholder engagement. Recognized for leading multi-country teams and ensuring project delivery aligned with high standards of sustainability, performance, and profitability."), /*#__PURE__*/React.createElement(BodyText, null, "Beyond his engineering leadership, Nooralden is the founder of a training platform with more than 20,000 students, and an independent trainer with over 400 hours of in-person training and 15,000 online learners. His expertise spans technical consulting, contract negotiations, project execution, and regulatory compliance."), /*#__PURE__*/React.createElement(BodyText, null, "He holds several professional certifications, including Certified Energy Manager (CEM), Certified Energy Auditor (CEA), and Certified Solar PV Installer (CSPI), in addition to a B.Sc. in Mechanical Engineering."), /*#__PURE__*/React.createElement(BodyText, null, "With a strong passion for knowledge-sharing, Nooralden continues to support engineers, students, and professionals in building a sustainable renewable future.")));
}
Object.assign(window, {
  AuthorScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/AuthorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/ChapterScreen.jsx
try { (() => {
function ChapterScreen() {
  const {
    BookPage,
    SectionHeading,
    SubHeading,
    BodyText,
    BulletList
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(BookPage, {
    page: 4,
    side: "verso"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    width: "150px"
  }, "Demand Size"), /*#__PURE__*/React.createElement(BodyText, null, "The customer will need to provide us with the facility\u2019s consumption data in order for us to start estimating the project\u2019s initial size."), /*#__PURE__*/React.createElement(BodyText, null, "One rule of thumb is that the project size is equal to consumption divided by the peak sun hours of the project site. To obtain the result, you can split the monthly, annual, or even daily amounts."), /*#__PURE__*/React.createElement(BodyText, null, "For grid-connected projects, use the average data to determine the system size; for off-grid projects, use the worst-case values, which represent the maximum consumption."), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "After you have determined the system size, you need to do as follows:"), /*#__PURE__*/React.createElement(SubHeading, {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Project imagination"), /*#__PURE__*/React.createElement(BodyText, null, "step before breaking ground. We\u2019ll go over a number of practical considerations to make sure everything is well-thought-out and applicable, and we\u2019ll find solutions to potential problems before they arise on site."), /*#__PURE__*/React.createElement(BodyText, null, "So, to get a good idea of the project and its obstacles without spending any money, you need to answer the questions below."), /*#__PURE__*/React.createElement(SubHeading, {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Project Size"), /*#__PURE__*/React.createElement(BulletList, {
    items: ['Can we do that legally?', 'Can we handle the project size due to the payments?', 'What is our license? If we cannot do it, we can make a JV', 'What are the payment terms?', 'Do we have the machines for the project?', 'Do we have the installation team for the project or subcontract?']
  }));
}
Object.assign(window, {
  ChapterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/ChapterScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/ContentsScreen.jsx
try { (() => {
const entries = [{
  title: 'Demand Size and project imagination from scratch',
  page: 4
}, {
  title: 'Avoiding Risk',
  page: 9
}, {
  title: 'DC/AC Sizing calculations',
  page: 10
}, {
  title: 'How to make the design applicable on site',
  page: 16
}, {
  title: 'Structure selection.',
  page: 18
}, {
  title: 'Corrosion classification',
  page: 19
}, {
  title: 'How to make the Design Report',
  page: 20
}, {
  title: 'Cable Calculations',
  page: 22
}, {
  title: 'Financial Calculations',
  page: 29
}, {
  title: 'Make the final proposal',
  page: 32
}, {
  title: 'Standards and regulations:',
  page: 34
}, {
  title: 'General MENA Codes and Requirements',
  page: 36
}, {
  title: 'Saudi Codes and Requirements for PV Solar Systems',
  page: 36
}, {
  title: 'Technical Requirements for PV Projects - KSA Best Practice',
  page: 37
}, {
  title: 'Climatic and Environmental Conditions',
  page: 39
}, {
  title: 'General Operational Requirements for PV Plants - KSA Best Practice',
  page: 39
}, {
  title: 'About the Author',
  page: 42
}];
function ContentsScreen() {
  const {
    BookPage,
    SectionHeading,
    TocList
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(BookPage, {
    page: 3,
    side: "recto",
    logoSrc: "../../assets/logo-najdeah-dark.png",
    watermarkSrc: "../../assets/bg-network.jpg"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    width: "120px"
  }, "Content:"), /*#__PURE__*/React.createElement(TocList, {
    entries: entries,
    style: {
      fontSize: 'var(--text-small)'
    }
  }));
}
Object.assign(window, {
  ContentsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/ContentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/CoverScreen.jsx
try { (() => {
function CoverScreen() {
  const {
    BookCover
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(BookCover, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Solar PV Plant", /*#__PURE__*/React.createElement("br", null), "Design Guide"),
    byline: "By Nooralden Najdeah",
    blurb: "A structured technical reference for professionals and students working in solar photovoltaics, drawn from design and engineering experience across the Middle East.",
    edition: "Second Edition",
    year: "2025",
    photoSrc: "../../assets/cover-ground-mount.jpg",
    logoSrc: "../../assets/logo-najdeah-white.png"
  });
}
Object.assign(window, {
  CoverScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/CoverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/OpenerScreen.jsx
try { (() => {
function OpenerScreen() {
  const {
    PartOpener
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(PartOpener, {
    title: "Solar PV Plant Design Guide",
    author: "Nooralden Najdeah",
    photoSrc: "../../assets/photo-sunset-array.jpg"
  });
}
Object.assign(window, {
  OpenerScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/OpenerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/guide-book/ReportScreen.jsx
try { (() => {
const rows = [{
  group: 'DC Design'
}, {
  cells: ['Total number of modules', 'X modules', 'PVsyst simulation']
}, {
  cells: ['Module peak power', 'X Wp', 'datasheet']
}, {
  cells: ['DC System Size', 'X kwp', 'PVsyst simulation']
}, {
  cells: ['Solar module maximum power voltage (Vmp)', 'X V', 'datasheet']
}, {
  cells: ['Solar module open-circuit voltage (Voc)', 'X V', 'datasheet']
}, {
  cells: ['Number of inverters', 'X inverters', 'PVsyst simulation']
}, {
  cells: ['PV wire conductor size', 'X AWG , X mm²', 'NEC 2020']
}, {
  cells: ['DC fuse rating', 'XP, X A, X VDC', 'NEC 2020']
}, {
  group: 'AC Design'
}, {
  cells: ['Inverter maximum AC output power', 'X kW, X KW', 'Inverter datasheet']
}, {
  cells: ['AC disconnect switch rating (for the inverters)', 'X A, X A', 'NEC 2020']
}, {
  cells: ['MCCB rating (for the inverters)', 'x A, X A', 'NEC 2020']
}, {
  cells: ['Main AC Disconnect Switch Rating (combined)', 'X A adjustable', 'NEC 2020']
}];
function ReportScreen() {
  const {
    BookPage,
    SectionHeading,
    SubHeading,
    BodyText,
    SpecTable
  } = window.NAJDEAH_DS;
  return /*#__PURE__*/React.createElement(BookPage, {
    page: 21,
    side: "recto",
    logoSrc: "../../assets/logo-najdeah-dark.png"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    width: "230px"
  }, "How to make the Electrical Design Report"), /*#__PURE__*/React.createElement(BodyText, null, "make sure to include the following in the report:"), /*#__PURE__*/React.createElement(BodyText, {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Introduction about the project \u2014 write the project description, location, and technical details as an introduction for the report."), /*#__PURE__*/React.createElement(SubHeading, {
    tone: "crimson"
  }, "DESIGN SUMMARY"), /*#__PURE__*/React.createElement(BodyText, null, "As per the below table, you can provide the project design details to summarize your work."), /*#__PURE__*/React.createElement(SpecTable, {
    columns: ['Parameter', 'Value', 'Reference'],
    rows: rows
  }));
}
Object.assign(window, {
  ReportScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guide-book/ReportScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AuthorBio = __ds_scope.AuthorBio;

__ds_ns.BodyText = __ds_scope.BodyText;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.BookPage = __ds_scope.BookPage;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.FigureBlock = __ds_scope.FigureBlock;

__ds_ns.PageFolio = __ds_scope.PageFolio;

__ds_ns.PartOpener = __ds_scope.PartOpener;

__ds_ns.RunningHeader = __ds_scope.RunningHeader;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.SubHeading = __ds_scope.SubHeading;

__ds_ns.TocList = __ds_scope.TocList;

})();
