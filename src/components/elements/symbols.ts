const icons = {
    AAL: () => import(/* webpackChunkName: "aal.svg-svg" */ 'images/svg/symbols/aal.svg'),
    AAPL: () => import(/* webpackChunkName: "aapl.svg-svg" */ 'images/svg/symbols/aapl.svg'),
    ABNB: () => import(/* webpackChunkName: "abnb.svg-svg" */ 'images/svg/symbols/abnb.svg'),
    ADAUSD: () => import(/* webpackChunkName: "ada-svg" */ 'images/svg/symbols/ada-usd.svg'),
    ADS: () => import(/* webpackChunkName: "ads.svg-svg" */ 'images/svg/symbols/ads.svg'),
    AIG: () => import(/* webpackChunkName: "aig.svg-svg" */ 'images/svg/symbols/aig.svg'),
    ALGORAND: () =>
        import(/* webpackChunkName: "algorand.svg-svg" */ 'images/svg/symbols/algorand.svg'),
    ALUMINIUMUSD: () =>
        import(/* webpackChunkName: "aluminium-svg" */ 'images/svg/symbols/aluminium-usd.svg'),
    AMZN: () => import(/* webpackChunkName: "amzn.svg-svg" */ 'images/svg/symbols/amzn.svg'),
    AUDBASKET: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-basket.svg'),
    AUDCAD: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-cad.svg'),
    AUDCHF: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-chf.svg'),
    AUDJPY: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-jpy.svg'),
    AUDNZD: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-nzd.svg'),
    AUDSGD: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-sgd.svg'),
    AUDUSD: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-usd.svg'),
    AUDUSD10: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-usd-10.svg'),
    AUDUSD20: () => import(/* webpackChunkName: "aud-svg" */ 'images/svg/symbols/aud-usd-20.svg'),
    AUS200: () => import(/* webpackChunkName: "aus-svg" */ 'images/svg/symbols/aus-200.svg'),
    AVALANCHE: () =>
        import(/* webpackChunkName: "avalanche.svg-svg" */ 'images/svg/symbols/avalanche.svg'),
    BA: () => import(/* webpackChunkName: "ba.svg-svg" */ 'images/svg/symbols/ba.svg'),
    BABA: () => import(/* webpackChunkName: "baba.svg-svg" */ 'images/svg/symbols/baba.svg'),
    BAC: () => import(/* webpackChunkName: "bac.svg-svg" */ 'images/svg/symbols/bac.svg'),
    BAT: () => import(/* webpackChunkName: "bat.svg-svg" */ 'images/svg/symbols/bat.svg'),
    BAY: () => import(/* webpackChunkName: "bay.svg-svg" */ 'images/svg/symbols/bay.svg'),
    BCHUSD: () => import(/* webpackChunkName: "bch-svg" */ 'images/svg/symbols/bch-usd.svg'),
    BIIB: () => import(/* webpackChunkName: "biib.svg-svg" */ 'images/svg/symbols/biib.svg'),
    BMW: () => import(/* webpackChunkName: "bmw.svg-svg" */ 'images/svg/symbols/bmw.svg'),
    BTCLTC: () => import(/* webpackChunkName: "bct-svg" */ 'images/svg/symbols/bct-ltc.svg'),
    BTCXAG: () => import(/* webpackChunkName: "bct-svg" */ 'images/svg/symbols/bct-xag.svg'),
    BTCXAU: () => import(/* webpackChunkName: "bct-svg" */ 'images/svg/symbols/bct-xau.svg'),
    BNBUSD: () => import(/* webpackChunkName: "bnb-svg" */ 'images/svg/symbols/bnb-usd.svg'),
    BOOM1000: () =>
        import(/* webpackChunkName: "boom-svg" */ 'images/svg/symbols/boom-indices-1000.svg'),
    BOOM1000NEW: () =>
        import(/* webpackChunkName: "boom-svg" */ 'images/svg/symbols/boom-indices-1000-new.svg'),
    BOOM500: () =>
        import(/* webpackChunkName: "boom-svg" */ 'images/svg/symbols/boom-indices-500.svg'),
    BOOM500NEW: () =>
        import(/* webpackChunkName: "boom-svg" */ 'images/svg/symbols/boom-indices-500-new.svg'),
    BOOM300EU: () =>
        import(/* webpackChunkName: "boom-svg" */ 'images/svg/symbols/boom-eu-boom-300.svg'),
    CRASH300EU: () =>
        import(/* webpackChunkName: "crash-svg" */ 'images/svg/symbols/crash-eu-crash-300.svg'),
    BTCUSD: () => import(/* webpackChunkName: "btc-svg" */ 'images/svg/symbols/btc-usd.svg'),
    BTCETH: () => import(/* webpackChunkName: "btc-svg" */ 'images/svg/symbols/btc-eth.svg'),
    C: () => import(/* webpackChunkName: "c.svg-svg" */ 'images/svg/symbols/c.svg'),
    DEX900UP: () => import(/* webpackChunkName: "dex-svg" */ 'images/svg/symbols/dex-900up.svg'),
    DEX900DN: () => import(/* webpackChunkName: "dex-svg" */ 'images/svg/symbols/dex-900dn.svg'),
    CADCHF: () => import(/* webpackChunkName: "cad-svg" */ 'images/svg/symbols/cad-chf.svg'),
    CADJPY: () => import(/* webpackChunkName: "cad-svg" */ 'images/svg/symbols/cad-jpy.svg'),
    CARDANO: () =>
        import(/* webpackChunkName: "cardano.svg-svg" */ 'images/svg/symbols/cardano.svg'),
    CHAINLINK: () =>
        import(/* webpackChunkName: "chainlink.svg-svg" */ 'images/svg/symbols/chainlink.svg'),
    CHFJPY: () => import(/* webpackChunkName: "chf-svg" */ 'images/svg/symbols/chf-jpy.svg'),
    CLBRENT: () => import(/* webpackChunkName: "cl-svg" */ 'images/svg/symbols/cl-brent.svg'),
    COPPERUSD: () =>
        import(/* webpackChunkName: "copper-svg" */ 'images/svg/symbols/copper-usd.svg'),
    CRASH1000: () =>
        import(/* webpackChunkName: "crash-svg" */ 'images/svg/symbols/crash-indices-1000.svg'),
    CRASH1000NEW: () =>
        import(/* webpackChunkName: "crash-svg" */ 'images/svg/symbols/crash-indices-1000-new.svg'),
    CRASH500: () =>
        import(/* webpackChunkName: "crash-svg" */ 'images/svg/symbols/crash-indices-500.svg'),
    CRASH500NEW: () =>
        import(/* webpackChunkName: "crash-svg" */ 'images/svg/symbols/crash-indices-500-new.svg'),
    CRM: () => import(/* webpackChunkName: "crm.svg-svg" */ 'images/svg/symbols/crm.svg'),
    CSCO: () => import(/* webpackChunkName: "csco.svg-svg" */ 'images/svg/symbols/csco.svg'),
    DAL: () => import(/* webpackChunkName: "dal.svg-svg" */ 'images/svg/symbols/dal.svg'),
    DAX30: () => import(/* webpackChunkName: "dax-svg" */ 'images/svg/symbols/dax-30.svg'),
    DBK: () => import(/* webpackChunkName: "dbk.svg-svg" */ 'images/svg/symbols/dbk.svg'),
    DIS: () => import(/* webpackChunkName: "dis.svg-svg" */ 'images/svg/symbols/dis.svg'),
    DOGECOIN: () =>
        import(/* webpackChunkName: "dogecoin.svg-svg" */ 'images/svg/symbols/dogecoin.svg'),
    DOGUSD: () => import(/* webpackChunkName: "dog-svg" */ 'images/svg/symbols/dog-usd.svg'),
    DOTUSD: () => import(/* webpackChunkName: "dot-svg" */ 'images/svg/symbols/dot-usd.svg'),
    DSHUSD: () => import(/* webpackChunkName: "dsh-svg" */ 'images/svg/symbols/dsh-usd.svg'),
    DSHUSD1: () => import(/* webpackChunkName: "dsh-svg" */ 'images/svg/symbols/dsh-usd1.svg'),
    EBAY: () => import(/* webpackChunkName: "ebay.svg-svg" */ 'images/svg/symbols/ebay.svg'),
    EOSUSD: () => import(/* webpackChunkName: "eos-svg" */ 'images/svg/symbols/eos-usd.svg'),
    EOSUSD1: () => import(/* webpackChunkName: "eos-svg" */ 'images/svg/symbols/eos-usd1.svg'),
    ESP35: () => import(/* webpackChunkName: "esp-svg" */ 'images/svg/symbols/esp-35.svg'),
    ETCUSD: () => import(/* webpackChunkName: "etc-svg" */ 'images/svg/symbols/etc-usd.svg'),
    ETHUSD: () => import(/* webpackChunkName: "eth-svg" */ 'images/svg/symbols/eth-usd.svg'),
    EUR50: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-50.svg'),
    EURAUD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-aud.svg'),
    EURBASKET: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-basket.svg'),
    EURCAD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-cad.svg'),
    EURCHF: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-chf.svg'),
    EURGBP: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-gbp.svg'),
    EURHKD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-hkd.svg'),
    EURILS: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-ils.svg'),
    EURJPY: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-jpy.svg'),
    EURLPN: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-lpn.svg'),
    EURMXN: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-mxn.svg'),
    EURNOK: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-nok.svg'),
    EURNZD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-nzd.svg'),
    EURO50INDEX: () =>
        import(/* webpackChunkName: "euro50index.svg-svg" */ 'images/svg/symbols/euro50index.svg'),
    EURSGD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-sgd.svg'),
    EURSEK: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-sek.svg'),
    EURTRY: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-try.svg'),
    EURUSD: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-usd.svg'),
    EURUSD10: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-usd-10.svg'),
    EURUSD20: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-usd-20.svg'),
    EURZAR: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-zar.svg'),
    FB: () => import(/* webpackChunkName: "fb.svg-svg" */ 'images/svg/symbols/fb.svg'),
    FILECOIN: () =>
        import(/* webpackChunkName: "filecoin.svg-svg" */ 'images/svg/symbols/filecoin.svg'),
    FILUSD: () => import(/* webpackChunkName: "fil-svg" */ 'images/svg/symbols/fil-usd.svg'),
    FDX: () => import(/* webpackChunkName: "fdx.svg-svg" */ 'images/svg/symbols/fdx.svg'),
    FRA40: () => import(/* webpackChunkName: "fra-svg" */ 'images/svg/symbols/fra-40.svg'),
    GBPAUD: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-aud.svg'),
    GBPBASKET: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-basket.svg'),
    GBPCAD: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-cad.svg'),
    GBPCHF: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-chf.svg'),
    GBPJPY: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-jpy.svg'),
    GBPNOK: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-nok.svg'),
    GBPNZD: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-nzd.svg'),
    GBPSGD: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-sgd.svg'),
    GBPSEK: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-sek.svg'),
    GBPTRY: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-try.svg'),
    GBPUSD: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-usd.svg'),
    GBPUSD10: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-usd-10.svg'),
    GBPUSD20: () => import(/* webpackChunkName: "gbp-svg" */ 'images/svg/symbols/gbp-usd-20.svg'),
    GM: () => import(/* webpackChunkName: "gm.svg-svg" */ 'images/svg/symbols/gm.svg'),
    GOLDBASKET: () =>
        import(/* webpackChunkName: "gold-svg" */ 'images/svg/symbols/gold-basket.svg'),
    GOLDEUR: () => import(/* webpackChunkName: "gold-svg" */ 'images/svg/symbols/gold-eur.svg'),
    GOLDUSD: () => import(/* webpackChunkName: "gold-svg" */ 'images/svg/symbols/gold-usd.svg'),
    GOOGL: () => import(/* webpackChunkName: "googl.svg-svg" */ 'images/svg/symbols/googl.svg'),
    GS: () => import(/* webpackChunkName: "gs.svg-svg" */ 'images/svg/symbols/gs.svg'),
    HKDJPY: () => import(/* webpackChunkName: "hkd-svg" */ 'images/svg/symbols/hkd-jpy.svg'),
    HPQ: () => import(/* webpackChunkName: "hpq.svg-svg" */ 'images/svg/symbols/hpq.svg'),
    IBM: () => import(/* webpackChunkName: "ibm.svg-svg" */ 'images/svg/symbols/ibm.svg'),
    INDEX10: () =>
        import(/* webpackChunkName: "index10.svg-svg" */ 'images/svg/symbols/index10.svg'),
    INDEX10NEW: () =>
        import(/* webpackChunkName: "index10-svg" */ 'images/svg/symbols/index10-new.svg'),
    INDEX100: () =>
        import(/* webpackChunkName: "index100.svg-svg" */ 'images/svg/symbols/index100.svg'),
    INDEX100NEW: () =>
        import(/* webpackChunkName: "index100-svg" */ 'images/svg/symbols/index100-new.svg'),
    INDEX100S1: () =>
        import(/* webpackChunkName: "index100s1.svg-svg" */ 'images/svg/symbols/index100s1.svg'),
    INDEX100S1NEW: () =>
        import(/* webpackChunkName: "index100s1-svg" */ 'images/svg/symbols/index100s1-new.svg'),
    INDEX10S1: () =>
        import(/* webpackChunkName: "index10s1.svg-svg" */ 'images/svg/symbols/index10s1.svg'),
    INDEX10S1NEW: () =>
        import(/* webpackChunkName: "index10s1-svg" */ 'images/svg/symbols/index10s1-new.svg'),
    INDEX25: () =>
        import(/* webpackChunkName: "index25.svg-svg" */ 'images/svg/symbols/index25.svg'),
    INDEX25NEW: () =>
        import(/* webpackChunkName: "index25-svg" */ 'images/svg/symbols/index25-new.svg'),
    INDEX25S1: () =>
        import(/* webpackChunkName: "index25s1.svg-svg" */ 'images/svg/symbols/index25s1.svg'),
    INDEX25S1NEW: () =>
        import(/* webpackChunkName: "index25s1-svg" */ 'images/svg/symbols/index25s1-new.svg'),
    INDEX50: () =>
        import(/* webpackChunkName: "index50.svg-svg" */ 'images/svg/symbols/index50.svg'),
    INDEX50NEW: () =>
        import(/* webpackChunkName: "index50-svg" */ 'images/svg/symbols/index50-new.svg'),
    INDEX50S1: () =>
        import(/* webpackChunkName: "index50s1.svg-svg" */ 'images/svg/symbols/index50s1.svg'),
    INDEX50S1NEW: () =>
        import(/* webpackChunkName: "index50s1-svg" */ 'images/svg/symbols/index50s1-new.svg'),
    INDEX75: () =>
        import(/* webpackChunkName: "index75.svg-svg" */ 'images/svg/symbols/index75.svg'),
    INDEX75NEW: () =>
        import(/* webpackChunkName: "index75-svg" */ 'images/svg/symbols/index75-new.svg'),
    INDEX75S1: () =>
        import(/* webpackChunkName: "index75s1.svg-svg" */ 'images/svg/symbols/index75s1.svg'),
    INDEX75S1NEW: () =>
        import(/* webpackChunkName: "index75s1-svg" */ 'images/svg/symbols/index75s1-new.svg'),
    INTC: () => import(/* webpackChunkName: "intc.svg-svg" */ 'images/svg/symbols/intc.svg'),
    IOTUSD: () => import(/* webpackChunkName: "iot-svg" */ 'images/svg/symbols/iot-usd.svg'),
    JNJ: () => import(/* webpackChunkName: "jnj.svg-svg" */ 'images/svg/symbols/jnj.svg'),
    JP225: () => import(/* webpackChunkName: "jp-svg" */ 'images/svg/symbols/jp-225.svg'),
    JPM: () => import(/* webpackChunkName: "jpm.svg-svg" */ 'images/svg/symbols/jpm.svg'),
    JUMP10: () => import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-10.svg'),
    JUMP10NEW: () =>
        import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-10-new.svg'),
    JUMP25: () => import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-25.svg'),
    JUMP25NEW: () =>
        import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-25-new.svg'),
    JUMP50: () => import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-50.svg'),
    JUMP50NEW: () =>
        import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-50-new.svg'),
    JUMP75: () => import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-75.svg'),
    JUMP75NEW: () =>
        import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-75-new.svg'),
    JUMP100: () => import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-100.svg'),
    JUMP100NEW: () =>
        import(/* webpackChunkName: "jump-svg" */ 'images/svg/symbols/jump-100-new.svg'),
    KO: () => import(/* webpackChunkName: "ko.svg-svg" */ 'images/svg/symbols/ko.svg'),
    LEADUSD: () => import(/* webpackChunkName: "lead-svg" */ 'images/svg/symbols/lead-usd.svg'),
    LNKUSD: () => import(/* webpackChunkName: "lnk-svg" */ 'images/svg/symbols/lnk-usd.svg'),
    LTCUSD: () => import(/* webpackChunkName: "ltc-svg" */ 'images/svg/symbols/ltc-usd.svg'),
    MA: () => import(/* webpackChunkName: "ma.svg-svg" */ 'images/svg/symbols/ma.svg'),
    MAKER: () => import(/* webpackChunkName: "maker.svg-svg" */ 'images/svg/symbols/maker.svg'),
    MARKETBEAR: () =>
        import(/* webpackChunkName: "marketbear.svg-svg" */ 'images/svg/symbols/marketbear.svg'),
    MARKETBEARNEW: () =>
        import(/* webpackChunkName: "marketbear-svg" */ 'images/svg/symbols/marketbear-new.svg'),
    MARKETBULL: () =>
        import(/* webpackChunkName: "marketbull.svg-svg" */ 'images/svg/symbols/marketbull.svg'),
    MARKETBULLNEW: () =>
        import(/* webpackChunkName: "marketbull-svg" */ 'images/svg/symbols/marketbull-new.svg'),
    MCD: () => import(/* webpackChunkName: "mcd.svg-svg" */ 'images/svg/symbols/mcd.svg'),
    MKRUSD: () => import(/* webpackChunkName: "mkr-svg" */ 'images/svg/symbols/mkr-usd.svg'),
    MRNA: () => import(/* webpackChunkName: "mrna.svg-svg" */ 'images/svg/symbols/mrna.svg'),
    MSFT: () => import(/* webpackChunkName: "msft.svg-svg" */ 'images/svg/symbols/msft.svg'),
    MTCUSD: () => import(/* webpackChunkName: "mtc-svg" */ 'images/svg/symbols/mtc-usd.svg'),
    NATURALGAS: () =>
        import(/* webpackChunkName: "natural-svg" */ 'images/svg/symbols/natural-gas.svg'),
    NED25: () => import(/* webpackChunkName: "ned-svg" */ 'images/svg/symbols/ned-25.svg'),
    NEOUSD: () => import(/* webpackChunkName: "neo-svg" */ 'images/svg/symbols/neo-usd.svg'),
    NFLX: () => import(/* webpackChunkName: "nflx.png-svg" */ 'images/svg/symbols/nflx.png'),
    NICKELUSD: () =>
        import(/* webpackChunkName: "nickel-svg" */ 'images/svg/symbols/nickel-usd.svg'),
    NKE: () => import(/* webpackChunkName: "nke.svg-svg" */ 'images/svg/symbols/nke.svg'),
    NVDA: () => import(/* webpackChunkName: "nvda.svg-svg" */ 'images/svg/symbols/nvda.svg'),
    NZDCAD: () => import(/* webpackChunkName: "nzd-svg" */ 'images/svg/symbols/nzd-cad.svg'),
    NZDCHF: () => import(/* webpackChunkName: "nzd-svg" */ 'images/svg/symbols/nzd-chf.svg'),
    NZDJPY: () => import(/* webpackChunkName: "nzd-svg" */ 'images/svg/symbols/nzd-jpy.svg'),
    NZDSGD: () => import(/* webpackChunkName: "nzd-svg" */ 'images/svg/symbols/nzd-sgd.svg'),
    NZDUSD: () => import(/* webpackChunkName: "nzd-svg" */ 'images/svg/symbols/nzd-usd.svg'),
    OILUSD: () => import(/* webpackChunkName: "oil-svg" */ 'images/svg/symbols/oil-usd.svg'),
    OMGUSD: () => import(/* webpackChunkName: "omg-svg" */ 'images/svg/symbols/omg-usd.svg'),
    OTCAUSTRALIAN: () =>
        import(
            /* webpackChunkName: "otcaustralian.svg-svg" */ 'images/svg/symbols/otcaustralian.svg'
        ),
    OTCDUTCH: () =>
        import(/* webpackChunkName: "otcdutch.svg-svg" */ 'images/svg/symbols/otcdutch.svg'),
    OTCFRENCH: () =>
        import(/* webpackChunkName: "otcfrench.svg-svg" */ 'images/svg/symbols/otcfrench.svg'),
    OTCGERMAN: () =>
        import(/* webpackChunkName: "otcgerman.svg-svg" */ 'images/svg/symbols/otcgerman.svg'),
    OTCHONGKONG: () =>
        import(/* webpackChunkName: "otchongkong.svg-svg" */ 'images/svg/symbols/otchongkong.svg'),
    OTCJAPANESE: () =>
        import(/* webpackChunkName: "otcjapanese.svg-svg" */ 'images/svg/symbols/otcjapanese.svg'),
    OTCSWISS: () =>
        import(/* webpackChunkName: "otcswiss.svg-svg" */ 'images/svg/symbols/otcswiss.svg'),
    OTCUK: () => import(/* webpackChunkName: "otcuk.svg-svg" */ 'images/svg/symbols/otcuk.svg'),
    OTCUS: () => import(/* webpackChunkName: "otcus.svg-svg" */ 'images/svg/symbols/otcus.svg'),
    OTCUSTECH: () =>
        import(/* webpackChunkName: "otcustech.svg-svg" */ 'images/svg/symbols/otcustech.svg'),
    OTCWALLSTREET: () =>
        import(
            /* webpackChunkName: "otcwallstreet.svg-svg" */ 'images/svg/symbols/otcwallstreet.svg'
        ),
    PALLADIUMUSD: () =>
        import(/* webpackChunkName: "palladium-svg" */ 'images/svg/symbols/palladium-usd.svg'),
    POUNDBRENT: () =>
        import(/* webpackChunkName: "pound-svg" */ 'images/svg/symbols/pound-brent.svg'),
    PFE: () => import(/* webpackChunkName: "pfe.svg-svg" */ 'images/svg/symbols/pfe.svg'),
    PG: () => import(/* webpackChunkName: "pg.svg-svg" */ 'images/svg/symbols/pg.svg'),
    POLKADOT: () =>
        import(/* webpackChunkName: "polkadot.svg-svg" */ 'images/svg/symbols/polkadot.svg'),
    POLYGON: () =>
        import(/* webpackChunkName: "polygon.svg-svg" */ 'images/svg/symbols/polygon.svg'),
    PLATINUMUSD: () =>
        import(/* webpackChunkName: "platinum-svg" */ 'images/svg/symbols/platinum-usd.svg'),
    PYPL: () => import(/* webpackChunkName: "pypl.svg-svg" */ 'images/svg/symbols/pypl.svg'),
    RANGEBREAK100: () => import(/* webpackChunkName: "rb-svg" */ 'images/svg/symbols/rb-100.svg'),
    RANGEBREAK200: () => import(/* webpackChunkName: "rb-svg" */ 'images/svg/symbols/rb-200.svg'),
    RANGEBREAK100New: () =>
        import(/* webpackChunkName: "rb-svg" */ 'images/svg/symbols/rb-100-new.svg'),
    RANGEBREAK200New: () =>
        import(/* webpackChunkName: "rb-svg" */ 'images/svg/symbols/rb-200-new.svg'),
    SGDJPY: () => import(/* webpackChunkName: "sgd-svg" */ 'images/svg/symbols/sgd-jpy.svg'),
    SILVERUSD: () =>
        import(/* webpackChunkName: "silver-svg" */ 'images/svg/symbols/silver-usd.svg'),
    SOLUSD: () => import(/* webpackChunkName: "sol-svg" */ 'images/svg/symbols/sol-usd.svg'),
    STEPINDICES: () =>
        import(/* webpackChunkName: "step-svg" */ 'images/svg/symbols/step-indices.svg'),
    STEPINDICESNEW: () =>
        import(/* webpackChunkName: "step-svg" */ 'images/svg/symbols/step-indices-new.svg'),
    TERUSD: () => import(/* webpackChunkName: "ter-svg" */ 'images/svg/symbols/ter-usd.svg'),
    TRXUSD: () => import(/* webpackChunkName: "trx-svg" */ 'images/svg/symbols/trx-usd.svg'),
    TEVA: () => import(/* webpackChunkName: "teva.svg-svg" */ 'images/svg/symbols/teva.svg'),
    TSLA: () => import(/* webpackChunkName: "tsla.svg-svg" */ 'images/svg/symbols/tsla.svg'),
    TWTR: () => import(/* webpackChunkName: "twtr.svg-svg" */ 'images/svg/symbols/twtr.svg'),
    UBER: () => import(/* webpackChunkName: "uber.svg-svg" */ 'images/svg/symbols/uber.svg'),
    UK100: () => import(/* webpackChunkName: "uk-svg" */ 'images/svg/symbols/uk-100.svg'),
    UNISWAP: () =>
        import(/* webpackChunkName: "uniswap.svg-svg" */ 'images/svg/symbols/uniswap.svg'),
    UNIUSD: () => import(/* webpackChunkName: "uni-svg" */ 'images/svg/symbols/uni-usd.svg'),
    US100: () => import(/* webpackChunkName: "us-svg" */ 'images/svg/symbols/us-100.svg'),
    US30: () => import(/* webpackChunkName: "us-svg" */ 'images/svg/symbols/us-30.svg'),
    US500: () => import(/* webpackChunkName: "us-svg" */ 'images/svg/symbols/us-500.svg'),
    USDBASKET: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-basket.svg'),
    USDCAD: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-cad.svg'),
    USDCHF: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-chf.svg'),
    USDCHF10: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-chf-10.svg'),
    USDCHF20: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-chf-20.svg'),
    USDCNH: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-cnh.svg'),
    USDHKD: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-hkd.svg'),
    USDILS: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-ils.svg'),
    USDJPY: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-jpy.svg'),
    USDJPY10: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-jpy-10.svg'),
    USDJPY20: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-jpy-20.svg'),
    USDMXN: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-mxn.svg'),
    USDNOK: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-nok.svg'),
    USDBRENT: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-brent.svg'),
    USDPLN: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-pln.svg'),
    EURPLN: () => import(/* webpackChunkName: "eur-svg" */ 'images/svg/symbols/eur-pln.svg'),
    USDRUB: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-rub.svg'),
    USDSEK: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-sek.svg'),
    USDSGD: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-sgd.svg'),
    USDTHB: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-thb.svg'),
    USDTRY: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-try.svg'),
    USDZAR: () => import(/* webpackChunkName: "usd-svg" */ 'images/svg/symbols/usd-zar.svg'),
    V: () => import(/* webpackChunkName: "v.svg-svg" */ 'images/svg/symbols/v.svg'),
    VOLATILITY300EU: () =>
        import(/* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-eu-300.svg'),
    VOLATILITY200EU: () =>
        import(/* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-eu-200.svg'),
    WMT: () => import(/* webpackChunkName: "wmt.svg-svg" */ 'images/svg/symbols/wmt.svg'),
    XMRUSD: () => import(/* webpackChunkName: "xmr-svg" */ 'images/svg/symbols/xmr-usd.svg'),
    XLMUSD: () => import(/* webpackChunkName: "xlm-svg" */ 'images/svg/symbols/xlm-usd.svg'),
    XTZ: () => import(/* webpackChunkName: "xtz.svg-svg" */ 'images/svg/symbols/xtz.svg'),
    XTZUSD: () => import(/* webpackChunkName: "xtz-svg" */ 'images/svg/symbols/xtz-usd.svg'),
    XRPUSD: () => import(/* webpackChunkName: "xrp-svg" */ 'images/svg/symbols/xrp-usd.svg'),
    XRPUSD1: () => import(/* webpackChunkName: "xrp-svg" */ 'images/svg/symbols/xrp-usd1.svg'),
    SILVEREUR: () =>
        import(/* webpackChunkName: "silver-svg" */ 'images/svg/symbols/silver-eur.svg'),
    SOLANA: () => import(/* webpackChunkName: "solana.svg-svg" */ 'images/svg/symbols/solana.svg'),
    STOCKSUS500: () =>
        import(
            /* webpackChunkName: "american-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/us-500.svg'
        ),
    STOCKSUSTECH100: () =>
        import(
            /* webpackChunkName: "american-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/us-tech-100.svg'
        ),
    STOCKSWALLSTREET30: () =>
        import(
            /* webpackChunkName: "american-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-indices/wall-street-30.svg'
        ),
    STOCKSAUS200: () =>
        import(
            /* webpackChunkName: "asian-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/asian-indices/aus-200.svg'
        ),
    STOCKSHONGKONG50: () =>
        import(
            /* webpackChunkName: "asian-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/asian-indices/hongkong-50.svg'
        ),
    STOCKSJAPAN225: () =>
        import(
            /* webpackChunkName: "asian-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/asian-indices/japan-225.svg'
        ),
    STOCKSEUROPE50: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/europe-50.svg'
        ),
    STOCKSFRANCE40: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/france-40.svg'
        ),
    STOCKSGERMANY30: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/germany-30.svg'
        ),
    STOCKSGERMANY40: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/germany-40.svg'
        ),
    STOCKSNETHERLANDS25: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/netherlands-25.svg'
        ),
    STOCKSSPAIN35: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/spain-35.svg'
        ),
    STOCKSUK100: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/uk-100.svg'
        ),
    STOCKSSWISS20: () =>
        import(
            /* webpackChunkName: "european-indices-svg" */ 'images/svg/symbols/markets-stocks-and-indices/european-indices/swiss-20.svg'
        ),
    STOCKSADIDASSALOMON: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-adidas-salomon.svg'
        ),
    STOCKSADVANCEDMICRODEVICES: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-amd.svg'
        ),
    STOCKSAIRBNB: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airbnb.svg'
        ),
    STOCKSAIRBUSSE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airbus.svg'
        ),
    STOCKSAIRFRANCE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-airfrance.svg'
        ),
    STOCKSALIBABAGROUP: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-alibaba-group-holding-ltd.svg'
        ),
    STOCKSALPHABET: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-alphabet-inc-class-c.svg'
        ),
    STOCKSAMAZON: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-amazon-com-inc.svg'
        ),
    STOCKSAIRLINESGROUP: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-american-airlines-group-inc.svg'
        ),
    STOCKSAMERICANINTERNATIONAL: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-american-international-group.svg'
        ),
    STOCKSAPPLE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-apple.svg'
        ),
    STOCKSBANKOFAMERICA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bank-of-america.svg'
        ),
    STOCKSBAYERAG: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bayer-ag.svg'
        ),
    STOCKSBIOGEN: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-biogen-inc.svg'
        ),
    STOCKSBMW: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-bmw.svg'
        ),
    STOCKSBOEING: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-boeing.svg'
        ),
    STOCKSCISCO: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-cisco-systems.svg'
        ),
    STOCKSCITIGROUP: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-citigroup.svg'
        ),
    STOCKSCOCACOLA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-coca-cola.svg'
        ),
    STOCKSCONTINENTAL: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-continental-ag.svg'
        ),
    STOCKSDELTAAIRLINES: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-delta-air-lines.svg'
        ),
    STOCKSDEUTSCHEBANK: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-deutsche-bank-ag.svg'
        ),
    STOCKSEBAY: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-e-bay-inc.svg'
        ),
    STOCKSFACEBOOK: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-facebook-inc.svg'
        ),
    STOCKSFEDEX: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-fedex.svg'
        ),
    STOCKSFOX: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-fox-corp-class-b.svg'
        ),
    STOCKSGENERALMOTORSCOMP: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-general-motors-company.svg'
        ),
    STOCKSGOLDMANSACHS: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-goldman-sachs-group.svg'
        ),
    STOCKSHPINC: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-hp-inc.svg'
        ),
    STOCKSHOME: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-home-depot.svg'
        ),
    STOCKSHUGOBOSS: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-hugo-boss.svg'
        ),
    STOCKSIBM: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-ibm.svg'
        ),
    STOCKSINTEL: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-intel.svg'
        ),
    STOCKSJOHNSONJOHNSON: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-jonhson-johnson.svg'
        ),
    STOCKSJPMORGANCHASE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-jp-morgan-chase.svg'
        ),
    STOCKSLUFTHANSA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-deutsche-lufthansa-ag.svg'
        ),
    STOCKSMASTERCARDINC: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-mastercard-inc.svg'
        ),
    STOCKSMCDONALDS: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-mc-donalds.svg'
        ),
    STOCKSMICROSOFT: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-microsoft-corporation.svg'
        ),
    STOCKSMODERNA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-moderna-inc.svg'
        ),
    STOCKSNESTLE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-nestle.svg'
        ),
    STOCKSNETFLIX: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-netflix.svg'
        ),
    STOCKSNIKE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-nike.svg'
        ),
    STOCKSNOVARTIS: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-novartis.svg'
        ),
    STOCKSNVIDIA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-nvidia-corp.svg'
        ),
    STOCKSPAYPAL: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-paypal.svg'
        ),
    STOCKSPFIZER: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-pfizer.svg'
        ),
    STOCKSPEPSICO: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-pepsico.svg'
        ),
    STOCKSPORSCHE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-porsche.svg'
        ),
    STOCKSPUMA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-puma.svg'
        ),
    STOCKSPROCTERGAMBLE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-procter-gamble.svg'
        ),
    STOCKSSALESFORCE: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-salesforce-com-inc.svg'
        ),
    STOCKSSONY: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-sony.svg'
        ),
    STOCKSTESLA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-tesla-inc.svg'
        ),
    STOCKSTEVAPHARMACEUTICAL: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-teva-pharmaceutical-inds.svg'
        ),
    STOCKSUBER: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-uber-technologies-inc.svg'
        ),
    STOCKSVISA: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-visa.svg'
        ),
    STOCKSWALMART: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-wal-mart-stores-inc.svg'
        ),
    STOCKSWALTDISNEY: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-walt-disney-company.svg'
        ),
    STOCKSZOOM: () =>
        import(
            /* webpackChunkName: "american-stocks-svg" */ 'images/svg/symbols/markets-stocks-and-indices/american-stocks/stocks-zoom-video-communications-inc.svg'
        ),
    TERRA: () => import(/* webpackChunkName: "terra.svg-svg" */ 'images/svg/symbols/terra.svg'),
    ZINCUSD: () => import(/* webpackChunkName: "zinc-svg" */ 'images/svg/symbols/zinc-usd.svg'),
    ZM: () => import(/* webpackChunkName: "zm.svg-svg" */ 'images/svg/symbols/zm.svg'),
    BNB: () =>
        import(
            /* webpackChunkName: "binance_coin_flag.svg-svg" */ 'images/svg/symbols/binance_coin_flag.svg'
        ),
    BTC: () =>
        import(
            /* webpackChunkName: "bitcoin_flag.svg-svg" */ 'images/svg/symbols/bitcoin_flag.svg'
        ),
    BCH: () =>
        import(
            /* webpackChunkName: "btc_cash_flag.svg-svg" */ 'images/svg/symbols/btc_cash_flag.svg'
        ),
    BCHNEW: () =>
        import(
            /* webpackChunkName: "btc_cash_flag-svg" */ 'images/svg/symbols/btc_cash_flag-new.svg'
        ),
    DASH: () =>
        import(/* webpackChunkName: "dash_flag.svg-svg" */ 'images/svg/symbols/dash_flag.svg'),
    EOS: () => import(/* webpackChunkName: "eos_flag.svg-svg" */ 'images/svg/symbols/eos_flag.svg'),
    ETH: () => import(/* webpackChunkName: "eth_flag.svg-svg" */ 'images/svg/symbols/eth_flag.svg'),
    ETH_CLASSIC: () =>
        import(/* webpackChunkName: "ethereum-svg" */ 'images/svg/symbols/ethereum-classic.svg'),
    IOTA: () =>
        import(/* webpackChunkName: "iota_flag.svg-svg" */ 'images/svg/symbols/iota_flag.svg'),
    LTC: () => import(/* webpackChunkName: "ltc_flag.svg-svg" */ 'images/svg/symbols/ltc_flag.svg'),
    NEO: () => import(/* webpackChunkName: "neo_flag.svg-svg" */ 'images/svg/symbols/neo_flag.svg'),
    XRP: () =>
        import(/* webpackChunkName: "ripple_flag.svg-svg" */ 'images/svg/symbols/ripple_flag.svg'),
    XLM: () =>
        import(
            /* webpackChunkName: "stellar_flag.svg-svg" */ 'images/svg/symbols/stellar_flag.svg'
        ),
    TRX: () =>
        import(/* webpackChunkName: "tron_flag.svg-svg" */ 'images/svg/symbols/tron_flag.svg'),
    ZEC: () =>
        import(/* webpackChunkName: "z_cash_flag.svg-svg" */ 'images/svg/symbols/z_cash_flag.svg'),
    MNR: () =>
        import(/* webpackChunkName: "monero_flag.svg-svg" */ 'images/svg/symbols/monero_flag.svg'),
    OMICEGO: () => import(/* webpackChunkName: "omise-svg" */ 'images/svg/symbols/omise-go.svg'),
    VBOOMIC300: () =>
        import(
            /* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-boom-300-new.svg'
        ),
    VCRASHIC300: () =>
        import(
            /* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-crash-300-new.svg'
        ),
    VINDEXIC200: () =>
        import(
            /* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-index-ic-200.svg'
        ),
    VINDEXIC300: () =>
        import(
            /* webpackChunkName: "volatility-svg" */ 'images/svg/symbols/volatility-index-ic-300.svg'
        ),
    VINDEX2001S: () =>
        import(
            /* webpackChunkName: "volatility_200_1s.svg-svg" */ 'images/svg/symbols/volatility_200_1s.svg'
        ),
    VINDEX3001S: () =>
        import(
            /* webpackChunkName: "volatility_300_1s.svg-svg" */ 'images/svg/symbols/volatility_300_1s.svg'
        ),
    VINDEX1501S: () =>
        import(
            /* webpackChunkName: "volatility_150_1s.svg-svg" */ 'images/svg/symbols/volatility_150_1s.svg'
        ),
    VINDEX2501S: () =>
        import(
            /* webpackChunkName: "volatility_250_1s.svg-svg" */ 'images/svg/symbols/volatility_250_1s.svg'
        ),
    ZECUSD: () => import(/* webpackChunkName: "zec-svg" */ 'images/svg/symbols/zec-usd.svg'),
}
export default icons
