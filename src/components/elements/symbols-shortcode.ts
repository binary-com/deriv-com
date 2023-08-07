const icons = {
    Vol_1HZ250V: () =>
        import(
            /* webpackChunkName: "shortcode-volatility_250_1s.svg" */ 'images/svg/symbols/volatility_250_1s.svg'
        ),
    Vol_1HZ150V: () =>
        import(
            /* webpackChunkName: "shortcode-volatility_150_1s.svg" */ 'images/svg/symbols/volatility_150_1s.svg'
        ),
    WTI_OIL: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-brent.svg'),
    CL_BRENT: () =>
        import(/* webpackChunkName: "shortcode-pound" */ 'images/svg/symbols/pound-brent.svg'),
    XAGEUR: () =>
        import(/* webpackChunkName: "shortcode-silver" */ 'images/svg/symbols/silver-eur.svg'),
    frxXAGUSD: () =>
        import(/* webpackChunkName: "shortcode-silver" */ 'images/svg/symbols/silver-usd.svg'),
    XAUEUR: () =>
        import(/* webpackChunkName: "shortcode-gold" */ 'images/svg/symbols/gold-eur.svg'),
    XALUSD: () =>
        import(
            /* webpackChunkName: "shortcode-aluminium" */ 'images/svg/symbols/aluminium-usd.svg'
        ),
    frxXCUUSD: () =>
        import(/* webpackChunkName: "shortcode-copper" */ 'images/svg/symbols/copper-usd.svg'),
    frxXAUUSD: () =>
        import(/* webpackChunkName: "shortcode-gold" */ 'images/svg/symbols/gold-usd.svg'),
    XNIUSD: () =>
        import(/* webpackChunkName: "shortcode-nickel" */ 'images/svg/symbols/nickel-usd.svg'),
    XPBUSD: () =>
        import(/* webpackChunkName: "shortcode-lead" */ 'images/svg/symbols/lead-usd.svg'),
    frxXPDUSD: () =>
        import(
            /* webpackChunkName: "shortcode-palladium" */ 'images/svg/symbols/palladium-usd.svg'
        ),
    frxXPTUSD: () =>
        import(/* webpackChunkName: "shortcode-platinum" */ 'images/svg/symbols/platinum-usd.svg'),
    XZNUSD: () =>
        import(/* webpackChunkName: "shortcode-zinc" */ 'images/svg/symbols/zinc-usd.svg'),
    cryADAUSD: () =>
        import(/* webpackChunkName: "shortcode-ada" */ 'images/svg/symbols/ada-usd.svg'),
    cryALGUSD: () =>
        import(/* webpackChunkName: "shortcode-algorand.svg" */ 'images/svg/symbols/algorand.svg'),
    cryAVAUSD: () =>
        import(
            /* webpackChunkName: "shortcode-avalanche.svg" */ 'images/svg/symbols/avalanche.svg'
        ),
    cryBATUSD: () =>
        import(/* webpackChunkName: "shortcode-bat.svg" */ 'images/svg/symbols/bat.svg'),
    cryBCHUSD: () =>
        import(
            /* webpackChunkName: "shortcode-btc_cash_flag" */ 'images/svg/symbols/btc_cash_flag-new.svg'
        ),
    cryBNBUSD: () =>
        import(/* webpackChunkName: "shortcode-bnb" */ 'images/svg/symbols/bnb-usd.svg'),
    cryBTCETH: () =>
        import(/* webpackChunkName: "shortcode-btc" */ 'images/svg/symbols/btc-eth.svg'),
    cryBTCLTC: () =>
        import(/* webpackChunkName: "shortcode-bct" */ 'images/svg/symbols/bct-ltc.svg'),
    cryBTCUSD: () =>
        import(/* webpackChunkName: "shortcode-btc" */ 'images/svg/symbols/btc-usd.svg'),
    cryDOGUSD: () =>
        import(/* webpackChunkName: "shortcode-dog" */ 'images/svg/symbols/dog-usd.svg'),
    cryDOTUSD: () =>
        import(/* webpackChunkName: "shortcode-dot" */ 'images/svg/symbols/dot-usd.svg'),
    cryDSHUSD: () =>
        import(/* webpackChunkName: "shortcode-dsh" */ 'images/svg/symbols/dsh-usd1.svg'),
    cryEOSUSD: () =>
        import(/* webpackChunkName: "shortcode-eos" */ 'images/svg/symbols/eos-usd1.svg'),
    cryETCUSD: () =>
        import(/* webpackChunkName: "shortcode-etc" */ 'images/svg/symbols/etc-usd.svg'),
    cryETHUSD: () =>
        import(/* webpackChunkName: "shortcode-eth" */ 'images/svg/symbols/eth-usd.svg'),
    cryFILUSD: () =>
        import(/* webpackChunkName: "shortcode-fil" */ 'images/svg/symbols/fil-usd.svg'),
    cryIOTUSD: () =>
        import(/* webpackChunkName: "shortcode-iot" */ 'images/svg/symbols/iot-usd.svg'),
    cryLNKUSD: () =>
        import(/* webpackChunkName: "shortcode-lnk" */ 'images/svg/symbols/lnk-usd.svg'),
    cryLTCUSD: () =>
        import(/* webpackChunkName: "shortcode-ltc" */ 'images/svg/symbols/ltc-usd.svg'),
    cryMKRUSD: () =>
        import(/* webpackChunkName: "shortcode-mkr" */ 'images/svg/symbols/mkr-usd.svg'),
    cryMTCUSD: () =>
        import(/* webpackChunkName: "shortcode-mtc" */ 'images/svg/symbols/mtc-usd.svg'),
    cryNEOUSD: () =>
        import(/* webpackChunkName: "shortcode-neo" */ 'images/svg/symbols/neo-usd.svg'),
    cryOMGUSD: () =>
        import(/* webpackChunkName: "shortcode-omg" */ 'images/svg/symbols/omg-usd.svg'),
    crySOLUSD: () =>
        import(/* webpackChunkName: "shortcode-sol" */ 'images/svg/symbols/sol-usd.svg'),
    cryTRXUSD: () =>
        import(/* webpackChunkName: "shortcode-trx" */ 'images/svg/symbols/trx-usd.svg'),
    cryUNIUSD: () =>
        import(/* webpackChunkName: "shortcode-uni" */ 'images/svg/symbols/uni-usd.svg'),
    cryXLMUSD: () =>
        import(/* webpackChunkName: "shortcode-xlm" */ 'images/svg/symbols/xlm-usd.svg'),
    cryXMRUSD: () =>
        import(/* webpackChunkName: "shortcode-xmr" */ 'images/svg/symbols/xmr-usd.svg'),
    cryXRPUSD: () =>
        import(/* webpackChunkName: "shortcode-xrp" */ 'images/svg/symbols/xrp-usd1.svg'),
    cryXTZUSD: () =>
        import(/* webpackChunkName: "shortcode-xtz" */ 'images/svg/symbols/xtz-usd.svg'),
    cryZECUSD: () =>
        import(/* webpackChunkName: "shortcode-zec" */ 'images/svg/symbols/zec-usd.svg'),
    DEADS: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-adidas-salomon.svg'
        ),
    FRAIR: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airbus.svg'
        ),
    FRAIRF: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airfrance.svg'
        ),
    DEBAYER: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bayer-ag.svg'
        ),
    DEBMW: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bmw.svg'
        ),
    DECONG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-continental-ag.svg'
        ),
    DEDBK: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-deutsche-bank-ag.svg'
        ),
    DELHAG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-deutsche-lufthansa-ag.svg'
        ),
    DEPSHG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-porsche.svg'
        ),
    DEPUMG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-puma.svg'
        ),
    USAAL: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-american-airlines-group-inc.svg'
        ),
    USAAPL: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-apple.svg'
        ),
    USABNB: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airbnb.svg'
        ),
    USAIG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-american-international-group.svg'
        ),
    USAMD: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-amd.svg'
        ),
    USAMZN: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-amazon-com-inc.svg'
        ),
    USBA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-boeing.svg'
        ),
    USBABA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-alibaba-group-holding-ltd.svg'
        ),
    USBAC: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bank-of-america.svg'
        ),
    USBIIB: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-biogen-inc.svg'
        ),
    USC: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-citigroup.svg'
        ),
    USCRM: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-salesforce-com-inc.svg'
        ),
    USCSCO: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-cisco-systems.svg'
        ),
    USDAL: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-delta-air-lines.svg'
        ),
    USDIS: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-walt-disney-company.svg'
        ),
    USEBAY: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-e-bay-inc.svg'
        ),
    USFB: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-facebook-inc.svg'
        ),
    USFDX: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-fedex.svg'
        ),
    USFOX: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-fox-corp-class-b.svg'
        ),
    USGM: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-general-motors-company.svg'
        ),
    USGOOG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-alphabet-inc-class-c.svg'
        ),
    USGLDSCH: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-goldman-sachs-group.svg'
        ),
    USHD: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-home-depot.svg'
        ),
    USHPQ: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-hp-inc.svg'
        ),
    USIBM: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-ibm.svg'
        ),
    USINTC: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-intel.svg'
        ),
    USJNJ: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-jonhson-johnson.svg'
        ),
    USJPM: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-jp-morgan-chase.svg'
        ),
    USKO: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-coca-cola.svg'
        ),
    USMA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-mastercard-inc.svg'
        ),
    USMCD: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-mc-donalds.svg'
        ),
    USMRNA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-moderna-inc.svg'
        ),
    USMSFT: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-microsoft-corporation.svg'
        ),
    USNTFLX: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-netflix.svg'
        ),
    USNKE: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-nike.svg'
        ),
    USNVDA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-nvidia-corp.svg'
        ),
    USPEP: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-pepsico.svg'
        ),
    USPFE: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-pfizer.svg'
        ),
    USPG: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-procter-gamble.svg'
        ),
    USPYPL: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-paypal.svg'
        ),
    USSONY: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-sony.svg'
        ),
    USTEVA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-teva-pharmaceutical-inds.svg'
        ),
    USTSLMTR: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-tesla-inc.svg'
        ),
    USUBER: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-uber-technologies-inc.svg'
        ),
    USVISA: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-visa.svg'
        ),
    USWMT: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-wal-mart-stores-inc.svg'
        ),
    USZM: () =>
        import(
            /* webpackChunkName: "shortcode-american-stocks" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-zoom-video-communications-inc.svg'
        ),
    OTC_GDAXI: () =>
        import(
            /* webpackChunkName: "shortcode-european-indices" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/germany-40.svg'
        ),
    OTC_IBEX35: () =>
        import(
            /* webpackChunkName: "shortcode-european-indices" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/spain-35.svg'
        ),
    OTC_SX5E: () =>
        import(
            /* webpackChunkName: "shortcode-european-indices" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/europe-50.svg'
        ),
    OTC_FCHI: () =>
        import(
            /* webpackChunkName: "shortcode-european-indices" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/france-40.svg'
        ),
    OTC_N225: () =>
        import(
            /* webpackChunkName: "shortcode-asian-indices" */ 'images/svg/symbols/markets-stocks-and-indices/asian-indices/japan-225.svg'
        ),
    OTC_FTSE: () =>
        import(
            /* webpackChunkName: "shortcode-european-indices" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/uk-100.svg'
        ),
    OTC_NDX: () =>
        import(
            /* webpackChunkName: "shortcode-american-indices" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/us-tech-100.svg'
        ),
    OTC_DJI: () =>
        import(
            /* webpackChunkName: "shortcode-american-indices" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/wall-street-30.svg'
        ),
    OTC_SPC: () =>
        import(
            /* webpackChunkName: "shortcode-american-indices" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/us-500.svg'
        ),
    OTC_AS51: () =>
        import(
            /* webpackChunkName: "shortcode-asian-indices" */ 'images/svg/symbols/markets-stocks-and-indices/asian-indices/aus-200.svg'
        ),
    R_10: () =>
        import(/* webpackChunkName: "shortcode-index10" */ 'images/svg/symbols/index10-new.svg'),
    R_25: () =>
        import(/* webpackChunkName: "shortcode-index25" */ 'images/svg/symbols/index25-new.svg'),
    R_50: () =>
        import(/* webpackChunkName: "shortcode-index50" */ 'images/svg/symbols/index50-new.svg'),
    R_75: () =>
        import(/* webpackChunkName: "shortcode-index75" */ 'images/svg/symbols/index75-new.svg'),
    R_100: () =>
        import(/* webpackChunkName: "shortcode-index100" */ 'images/svg/symbols/index100-new.svg'),
    stpRNG: () =>
        import(/* webpackChunkName: "shortcode-step" */ 'images/svg/symbols/step-indices-new.svg'),
    RB100: () => import(/* webpackChunkName: "shortcode-rb" */ 'images/svg/symbols/rb-100-new.svg'),
    RB200: () => import(/* webpackChunkName: "shortcode-rb" */ 'images/svg/symbols/rb-200-new.svg'),
    Vol_1HZ10V: () =>
        import(
            /* webpackChunkName: "shortcode-index10s1" */ 'images/svg/symbols/index10s1-new.svg'
        ),
    Vol_1HZ25V: () =>
        import(
            /* webpackChunkName: "shortcode-index25s1" */ 'images/svg/symbols/index25s1-new.svg'
        ),
    Vol_1HZ50V: () =>
        import(
            /* webpackChunkName: "shortcode-index50s1" */ 'images/svg/symbols/index50s1-new.svg'
        ),
    Vol_1HZ75V: () =>
        import(
            /* webpackChunkName: "shortcode-index75s1" */ 'images/svg/symbols/index75s1-new.svg'
        ),
    Vol_1HZ100V: () =>
        import(
            /* webpackChunkName: "shortcode-index100s1" */ 'images/svg/symbols/index100s1-new.svg'
        ),
    Vol_1HZ200V: () =>
        import(
            /* webpackChunkName: "shortcode-volatility_200_1s.svg" */ 'images/svg/symbols/volatility_200_1s.svg'
        ),
    Vol_1HZ300V: () =>
        import(
            /* webpackChunkName: "shortcode-volatility_300_1s.svg" */ 'images/svg/symbols/volatility_300_1s.svg'
        ),
    BOOM1000: () =>
        import(
            /* webpackChunkName: "shortcode-boom" */ 'images/svg/symbols/boom-indices-1000-new.svg'
        ),
    BOOM500: () =>
        import(
            /* webpackChunkName: "shortcode-boom" */ 'images/svg/symbols/boom-indices-500-new.svg'
        ),
    CRASH1000: () =>
        import(
            /* webpackChunkName: "shortcode-crash" */ 'images/svg/symbols/crash-indices-1000-new.svg'
        ),
    CRASH500: () =>
        import(
            /* webpackChunkName: "shortcode-crash" */ 'images/svg/symbols/crash-indices-500-new.svg'
        ),
    JD10: () =>
        import(/* webpackChunkName: "shortcode-jump" */ 'images/svg/symbols/jump-10-new.svg'),
    JD100: () =>
        import(/* webpackChunkName: "shortcode-jump" */ 'images/svg/symbols/jump-100-new.svg'),
    JD25: () =>
        import(/* webpackChunkName: "shortcode-jump" */ 'images/svg/symbols/jump-25-new.svg'),
    JD50: () =>
        import(/* webpackChunkName: "shortcode-jump" */ 'images/svg/symbols/jump-50-new.svg'),
    JD75: () =>
        import(/* webpackChunkName: "shortcode-jump" */ 'images/svg/symbols/jump-75-new.svg'),
    WLDAUD: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-basket.svg'),
    WLDEUR: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-basket.svg'),
    WLDGBP: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-basket.svg'),
    WLDUSD: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-basket.svg'),
    WLDXAU: () =>
        import(/* webpackChunkName: "shortcode-gold" */ 'images/svg/symbols/gold-basket.svg'),
    USDJPYDFX10: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-jpy-10.svg'),
    GBPUSDDFX10: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-usd-10.svg'),
    AUDUSDDFX10: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-usd-10.svg'),
    USDCHFDFX10: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-chf-10.svg'),
    EURUSDDFX10: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-usd-10.svg'),
    BOOM300: () =>
        import(/* webpackChunkName: "shortcode-boom" */ 'images/svg/symbols/boom-eu-boom-300.svg'),
    CRASH300: () =>
        import(
            /* webpackChunkName: "shortcode-crash" */ 'images/svg/symbols/crash-eu-crash-300.svg'
        ),
    frxAUDJPY: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-jpy.svg'),
    frxAUDUSD: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-usd.svg'),
    frxEURAUD: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-aud.svg'),
    frxEURCAD: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-cad.svg'),
    frxEURCHF: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-chf.svg'),
    frxEURGBP: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-gbp.svg'),
    frxEURJPY: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-jpy.svg'),
    frxEURUSD: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-usd.svg'),
    frxGBPAUD: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-aud.svg'),
    frxGBPJPY: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-jpy.svg'),
    frxGBPUSD: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-usd.svg'),
    frxUSDCAD: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-cad.svg'),
    frxUSDCHF: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-chf.svg'),
    frxUSDJPY: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-jpy.svg'),
    frxAUDCAD: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-cad.svg'),
    frxAUDCHF: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-chf.svg'),
    frxAUDNZD: () =>
        import(/* webpackChunkName: "shortcode-aud" */ 'images/svg/symbols/aud-nzd.svg'),
    frxCADCHF: () =>
        import(/* webpackChunkName: "shortcode-cad" */ 'images/svg/symbols/cad-chf.svg'),
    frxCADJPY: () =>
        import(/* webpackChunkName: "shortcode-cad" */ 'images/svg/symbols/cad-jpy.svg'),
    frxCHFJPY: () =>
        import(/* webpackChunkName: "shortcode-chf" */ 'images/svg/symbols/chf-jpy.svg'),
    frxEURNOK: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-nok.svg'),
    frxEURNZD: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-nzd.svg'),
    frxEURPLN: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-pln.svg'),
    frxEURSEK: () =>
        import(/* webpackChunkName: "shortcode-eur" */ 'images/svg/symbols/eur-sek.svg'),
    frxGBPCAD: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-cad.svg'),
    frxGBPCHF: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-chf.svg'),
    frxGBPNOK: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-nok.svg'),
    frxGBPNZD: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-nzd.svg'),
    frxGBPSEK: () =>
        import(/* webpackChunkName: "shortcode-gbp" */ 'images/svg/symbols/gbp-sek.svg'),
    frxNZDCAD: () =>
        import(/* webpackChunkName: "shortcode-nzd" */ 'images/svg/symbols/nzd-cad.svg'),
    frxNZDJPY: () =>
        import(/* webpackChunkName: "shortcode-nzd" */ 'images/svg/symbols/nzd-jpy.svg'),
    frxNZDUSD: () =>
        import(/* webpackChunkName: "shortcode-nzd" */ 'images/svg/symbols/nzd-usd.svg'),
    frxUSDCNH: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-cnh.svg'),
    frxUSDMXN: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-mxn.svg'),
    frxUSDNOK: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-nok.svg'),
    frxUSDPLN: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-pln.svg'),
    frxUSDSEK: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-sek.svg'),
    frxUSDZAR: () =>
        import(/* webpackChunkName: "shortcode-usd" */ 'images/svg/symbols/usd-zar.svg'),
}

export default icons
