var ueDataLayer = ueDataLayer || {};

ueDataLayer.be_page_url = document.location.href.split("?")[0];
ueDataLayer.be_page_url_qs = document.location.href;
ueDataLayer.be_page_article_title = document.title;
ueDataLayer.be_page_section = document.location.pathname == "/" ? "home" : document.location.pathname.split("/")[1];
ueDataLayer.be_page_subsection1 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[2];
ueDataLayer.be_page_subsection2 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[3];
ueDataLayer.be_page_subsection3 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[4];
ueDataLayer.be_page_subsection4 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[5];
ueDataLayer.be_page_subsection5 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[6];
ueDataLayer.be_page_subsection6 = typeof document.location.pathname.split("/")[2] == "undefined" ? "" : document.location.pathname.split("/")[7];
ueDataLayer.be_page_domain = "expansion.com";
ueDataLayer.be_page_subdomain = "foro";
ueDataLayer.be_page_hierarchy = ueDataLayer.be_page_domain + "|" + ueDataLayer.be_page_subdomain + "|" + ueDataLayer.be_page_section + "|" + ueDataLayer.be_page_subsection1 + "|" + ueDataLayer.be_page_subsection2 + "|" + ueDataLayer.be_page_subsection3 + "|" + ueDataLayer.be_page_subsection4 + "|" + ueDataLayer.be_page_subsection5 + "|" + ueDataLayer.be_page_subsection6;
ueDataLayer.be_text_seoTags = "";
ueDataLayer.be_page_site_version = "";
ueDataLayer.be_page_cms_template = "";
ueDataLayer.be_page_content_type = "otros";
ueDataLayer.be_navigation_type = "origen"
ueDataLayer.be_content_premium_detail = "abierto";
ueDataLayer.be_content_premium = "0";
ueDataLayer.be_content_signwall_detail = "abierto";
ueDataLayer.be_content_signwall = "0";
ueDataLayer.prod_name_evento = "";
ueDataLayer.prod_quantity_evento = "";
ueDataLayer.prod_unitprice_evento = "";
ueDataLayer.prod_totalamount_evento = "";