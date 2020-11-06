export const medicalLabel = [
  [
    {
      title: "淺析台灣人工智慧醫療之發展",
    },
    {
      author: [
        "呂宜瑾",
        "https://https://portal.stpi.narl.org.tw/index/article/10499.nat.gov.tw/c/sTkT.htm",
      ],
    },
    {
      content:
        "2016年Google旗下研發機構發表第一篇藉由機器深度學習，早期診斷糖尿病視網膜病變的論文，將人工智慧於醫療之應用，推向新的紀元（PingWest, 2017）。之後幾年，台灣致力於人工智慧醫療之發展，而完整的全民健保資料庫，則成為了強而有力的後盾。雖然，醫療影像辨識為目前較為成熟的發展主力，未來仍有其他應用等待被挖掘，最重要的是必須建立相關的法規及配套措施，才能讓人工智慧醫療在有得以遵循的規範下，穩定發展。",
    },
    {
      picture: [
        "https://portal.stpi.narl.org.tw/image/4b1141427395c699017395c702680fb3",
        "文章圖片所有權：https://pse.is/G7CAG，Created by PublicDomainPictures著作權聲明：CC0 Public Domain-可以做商業用途-不要求署名",
      ],
    },
    { contenttitle: "一、人工智慧的歷史與發展" },
    {
      content:
        "「人工智慧」（Artificial Intelligence，簡稱AI），顧名思義是由人類所製造出來的機器（電腦），透過反覆的訓練與學習所展現的智慧。AI內含了「機器學習」、「深度學習」與「自然語言」等概念，且依據電腦能處理與判斷的能力不同，產生不同的分級。",
    },
    {
      content:
        "AI發展的歷史，從第一台電腦出現迄今已過半世紀，期間經歷了三波熱潮，前兩次熱潮因受限於當時的技術發展而退燒（曲建仲，2018；盧傑瑞，2018）。",
    },
    {
      content: "(一) 第一波熱潮（1950~1960年）：探索與推論的時代",
    },
    {
      content:
        "1946年，全世界第一台電腦Enica誕生，之後的10年，在1956年達特茅斯研習會（Dartmouth Workshop）中首度出現「人工智慧」 （Artificial Intelligence，簡稱AI）的專有名詞。",
    },
    {
      content: "(二) 第二波熱潮（1980~1990年）：知識的時代",
    },
    {
      content:
        "專家系統：自1980年開始，將大量的專家知識輸入電腦中，再由電腦依據使用者的問題來判斷答案，後續應用在疾病的初步診斷。",
    },
    {
      content: "(三) 第三波熱潮（2000年~現在）：深度學習的時代",
    },
    {
      content:
        "自2000年起，半導體技術的進步，提升了電腦運算的能力；半導體的成本下降，讓雲端儲存的使用變得便宜。而透過雲端伺服器蒐集而來的大數據（Big Data），則成為了AI發展最重要的資源。",
    },
    {
      content:
        "2016年，Google開發的人工智慧AlphaGo，打敗南韓棋王李世乭後，讓AI的發展再次受到重視。2018年，美國國際研究暨顧問公司Gartner「十大技術趨勢」報告中指出，AI技術是近年科技發展的重要目標，並預估2018年AI相關產業年產值達1.2兆美元，相較前一年成長70%，2022年相關產值則達3.9兆美元（Kasey Panetta, 2017;Gartner, 2018）。而最新一期2019「十大技術趨勢」報告中，除了原有AI技術外，其餘AI衍生或是相關技術也名列其中，可能在未來5年內快速成長，對於人類生活、產業發展、科學技術更有機會帶來顛覆性的影響（Gartner, 2019）。",
    },
    { contenttitle: "二、台灣人工智慧醫療之發展現況" },
    {
      content:
        "依據美國市調機構CB Insights的調研結果，從投資趨勢來看，自2013年起，美國AI醫療新創投資件數共576件，募資金額超過43億美元，位居AI新創相關產業募資首位，而AI醫療募資之案件數，也於2018年第二季達新高峰，AI醫療受矚目的程度，可見一斑（Kyle Wiggers, 2018）。AI醫療的應用，進入「深度學習」的時代，除了將大量生理資訊輸入電腦，透過拋轉、整合、計算與紀錄，作為醫護團隊預測參考依據外，目前較主流的應用仍為醫學影像辨識。以台灣為例，國人每年平均看診次數約為15次，所累積的處方簽高達3億6千萬張；每年約有200萬人次使用電腦斷層與核磁共振等影像檢查，以肺部電腦斷層掃瞄為例，每進行一次電腦斷層掃瞄便可產生500張影像，一位有經驗的醫師進行初步篩選至少就要花20分鐘。醫療技術的進步，讓診斷更為細緻，疾病的分類則變得更為複雜。傳統影像辨識，靠的是醫師肉眼的判斷與經驗，一旦醫療數據增多、辨識時間拉長，長時間的工作帶來的疲乏，加上疾病的高複雜度，使醫師犯錯的機率提高（王若樸-c, ，2019; 基因線上，2018）。",
    },
    {
      content:
        "醫療影像辨識的發展，可追溯到2012年，由Google所建立的ImageNet，一個開放使用的圖像辨識測試數據庫，參賽者將深度學習應用到ImageNet，使圖樣辨識準確度高達85%，在當年電腦視覺比賽中奪冠，確認了深度學習在影像辨識的可行性。2016年，Google旗下的科研機構，發表了第一篇由機器深度學習進而提早發現糖尿病視網膜病變的論文，透過糖尿病患視網膜的影像辨識，早期偵測病變預防失明，技術研發成果後續將佈署於印度等眼科醫師缺乏的國家。台灣實施全民健康保險迄今已24年，病歷電子化也即將邁入第10年，巨量的醫療數據累積，成為台灣發展AI醫療的利基。分析醫療數據的組成，除了基本的生理資訊外，絕大部分就是各類的影像資料，包含：X光片、超音波、核磁共振、電腦斷層、病理切片等。影像辨識技術的發展，除了要足夠的影像資料來「訓練」電腦，從數據獲取→分析→建立模組，最後才能回答問題或是預測未來。過程中要如何讓電腦得到經驗，「理解」資料的特徵，達成「特徵表達學習」？靠的就是專家知識的輸入，透過一群醫師針對影像進行標記，建置模組後再用影像試驗，並進行校正，影像標記是建立模組原型最重要的基礎，也會影響影像預測的準確性。目前AI醫療影像辨識的應用，也已逐漸在台灣發展，相關案例如下（王若樸-a，2019）：",
    },
    { content: "(一) 乳房超音波AI輔助分類系統" },
    { content: "早期發現，腫瘤辨識度達9成，但良性、惡性的辨識度約7成。" },
    { content: "(二) AI骨齡輔助判讀系統" },
    { content: "準確度可達9成5。" },
    { content: "(三) DeepMets" },
    {
      content:
        "人工智慧腦瘤自動判讀系統，30秒就能圈出病灶，還能自動計算腫瘤體積。",
    },
    {
      content:
        "當然，開發中的醫療影像辨識技術遠比上述的例子多更多。2017年科技部為了推動國人醫療影像在地化，建置AI醫療影像資料庫，提出「醫療影像專案計畫」。次年（2018）年底，台灣首座「AI醫療影像」資料庫上線，15類疾病，共4.6萬筆影像，目前已有1/3完成疾病辨識，資料庫影像開放供很多團隊一同開發演算法，目前有台大、北榮及北醫等團隊參與（吳元熙，2018）。",
    },
    { content: "三、台灣人工智慧醫療之未來展望" },
    {
      content:
        "醫學影像的辨識難度，會與最終影像的辨識準確度有關，除了需處理的影像數量多外，以肺部為例，其影像有很多血管紋，血管橫切面與肺結節十分相像，增加辨識難度。另外，以開發數位病理AI聞名的雲象科技為例，顯微鏡底下的病理切片影像，又是另外一個層次的挑戰。首先面臨到的困難，就是病理切片影像傳換為數位影像，解析度非常高，超出電腦的運作能力，必須裁切成小區塊來訓練，以建立模組。初步完成鼻咽癌AI模組，自動標示癌症的高風險區，準確度達97%。全新挑戰則是全球幾乎沒有人在做的數位病理AI－血癌偵測模組，需辨識近40種不同種類或成熟度的骨髓細胞（王若樸-b，2019）。",
    },
    { content: "準確度可達9成5。" },
    {
      content:
        "然而，AI醫療的應用，不僅止於醫療影像辨識，目前正在發展的還包含文字與語意辨識、分子生物檢測等。以文字與語意辨識為例：全球首建肺癌病灶語意描述資料庫，過去的診療經驗，最關鍵的往往是問診的語句，其中夾帶足以判斷疾病的關鍵，卻無法單純從影像或是病歷中察覺。因此，除了既有的影像病灶標記外，北醫附醫的研究團隊更嘗試加入病灶語意描述，希望藉由AI的協助，讓醫師早一步發現肺癌。以分子生物檢測為例，藉由目前生物技術的發展，病人基因檢測或蛋白質體學檢測等變得相對容易，依據過去疾病的文獻研究，某些疾病的發生或是疾病發展的進程，可能與基因突變（或遺傳）或基因表現異常有關，如果能藉由病理數據、影像與基因變異之間，建立相關性的分析模組，希望進一步能達成降低早期風險或疾病的發生，或是預測病人預後狀況等。",
    },
    {
      content:
        "AI醫療的應用，可以藉由深度學習來增加準確度，而電腦學習的模式，必須由專家知識的輸入（給予框架或答案）來決定模組的原型，目前醫事人力的短缺，是阻礙AI醫療發展的原因之一。另外，AI於醫療之應用與其他產業的差別在於，醫療往往沒有標準答案，還有太多的例外，以及一些「只能意會、無法言傳」的醫師經驗累積，這些都會影響電腦的訓練結果，以及最終診斷的準確度與一致性。醫療領域最知名的AI應用，就不能不提IBM的超級電腦－華生（Waston），主要以自然語言訓練，從2011年發展至今，華生的腫瘤系統已在全球超過230家醫院使用，而近年華生醫生的發展聲勢卻持續下跌，原因出在，華生雖透過大量文獻資料、診斷紀錄等訓練，但效果仍與醫師診斷有著很大的差距，例如：對於醫療方法的選擇，無法提出具體而合理的解釋，更可能因為無法通盤考量病患條件，而做出不適切之診斷，顯見其電腦學習資料量不足；另因應疾病與醫療的變化，須輸入新資料供系統學習，而新舊資料整合不易且所費不貲，這些臨床應用的瓶頸，終將讓華生輪為第二、第三線的醫療諮詢系統，或是為節省成本而捨棄不用，這些都必須在AI醫療的發展與應用上，引以為鑑（陳苓，2017）。最後一點，卻也是最重要的，便是相關法規及配套措施，包含技術開發與資料管理規範，建議相關部會積極主動研議，並透過跨部會合作，提出具體規範，才能讓台灣的AI醫療發展得更為順利（王郁倫，2019）。",
    },
  ],
  [
    {
      title: "現階段AI人工智慧在醫療領域的4大應用",
    },
    {
      author: ["黃聖筑(艾莉安,ALIEN)", "https://heho.com.tw/archives/20255"],
    },
    {
      content:
        "2016年Google旗下研發機構發表第一篇藉由機器深度學習，早期診斷糖尿病視網膜病變的論文，將人工智慧於醫療之應用，推向新的紀元（PingWest, 2017）。之後幾年，台灣致力於人工智慧醫療之發展，而完整的全民健保資料庫，則成為了強而有力的後盾。雖然，醫療影像辨識為目前較為成熟的發展主力，未來仍有其他應用等待被挖掘，最重要的是必須建立相關的法規及配套措施，才能讓人工智慧醫療在有得以遵循的規範下，穩定發展。",
    },
    {
      picture: ["https://heho.com.tw/archives/20255", " "],
    },
    {
      contenttitle:
        "AI人工智慧最初在科幻小說或電影中登場，被賦予了很多的科幻和未來的想像；而今AI人工智慧蓬勃發展，應用在生活各個領域，科學家也想辦法開發人工智慧應用於解決醫療領域的問題，希望能夠幫助患者診斷疾病或治療。",
    },
    { contenttitle: "現階段人工智慧在醫療上面的4大應用" },
    {
      content:
        "1.醫療機器人：隨高齡化社會來臨，醫療照護的需求激增，醫療資源人力短缺，因此，為了降低醫療人員負擔，AI人工智慧的機器人技術，應用於醫療領域來補足這方面的缺口，必然日益提升。例如：智能義肢、外骨骼，最夯的達文西微創手術系統，可協助外科醫師達到更精準的切除、修補和縫合等手術作業，修復人類受損身體，或醫療保健機器人輔助醫護人員的工作。",
    },
    {
      content:
        "2.AI智能診療及影像識別：智能診療就是將人工智慧技術用於輔助診療中，通常會透過深度學習技術，讓計算機「學習」專家醫生的醫療知識，模擬醫生的思維和診斷推理，例如：在數百萬個病例資料庫中，閱讀癌症或其他病灶的醫學診斷圖像，透過深度學習提升診斷和治療的正確率，補助醫師進行診療。",
    },
    {
      content:
        "3.智能藥物開發：根據美國食品藥物管理局(FDA)的數據指出，開發一種新藥平均耗時約14年，所費成本約26億，且潛在新藥約有 17% 因安全性或有效性不佳於臨床試驗失敗；所以現在智能藥物開發進入3.0 時代，是指將人工智慧中的深度學習技術應用於藥物研究，通過大數據分析和臨床文獻等龐大的資訊匯入，並導入機器學習技術，進行開發各類藥物，達到縮短新藥研發周期、降低新藥研發成本、提高新藥研發成功率等目的。",
    },
    {
      content:
        "4.智能健康管理：智能健康管理是將人工智慧技術應用在民眾日常的健康管理中。目前主要集中在風險識別、虛擬護士、精神健康、在線問診以及基於精準醫學的健康管理。",
    },
    {
      content:
        "隨著醫療衛生社區化、保健化的發展趨勢，透過視訊軟體設備，可在在家庭中進行疾病或照護的及時追蹤與監控，通過AI人工智慧的技術，可以實現醫院對患者或者是亞健康者的及時診斷與健康提醒，有效的預防病患疾病的惡化或在問題爆發時及時處理。",
    },
  ],
  [
    {
      title:
        "《從AI到智慧醫療》：醫師不可能記住每一個醫療案例，而這正是電腦的絕對優勢",
    },
    {
      author: ["蔣榮先", "https://www.thenewslens.com/article/137143"],
    },
    {
      picture: [
        "https://image1.thenewslens.com/2020/4/lv810jo3o772c65fopns56bt6u64rk.jpg?auto=compress&h=648&q=80&w=1080",
        " ",
      ],
    },
    {
      content:
        "隨著現代人生活步調越來越快，大海撈針式的查詢功能已經無法滿足使用者需求，人們開始期待想像是否有能像好萊塢電影《AI人工智慧》（A.I. Artificial Intelligence）中，無所不知的Dr. Know一樣，像是投幣式機器，可以直接詢問問題並會回答正確且令人滿意答案的機器人。",
    },
    { contenttitle: "美國" },
    {
      content:
        "IBM的「華生」因此而生，它被設計成能使用自然語言來回答問題的QA人工智慧系統。後來IBM公司接著推出數種QA醫療機器人解決方案，例如：華生癌症治療輔助系統（WfO）。這是一種輔助腫瘤科醫師的人工智慧軟體工具，並宣稱未來會隨著多種應用的導入而增長其智慧，當年在美國新聞媒體的廣告是──「華生進醫學院讀書了！」",
    },
    {
      content:
        "目前在人類癌症的研究方面，已有幾所醫學機構利用華生系統進行大量的醫學資料分析，其目的在短時間內消化分析大量的癌症醫學研究文獻與報告，號稱可以每年閱讀並理解超過五萬篇新癌症相關報告的速度，未來將成為腫瘤科醫生的得力助手。",
    },
    {
      content:
        "該輔助系統會在醫生問診之後，立即將病例報告、理學和影像檢查數據等載入人工智慧知識庫，計算治療成效、副作用、與五年存活率等參考數據，同時針對該病患提供個人化的診治建議；目前該方案在理想的情況下可以省去醫療人員閱讀大量文獻的時間，聚焦在該給病患的關懷與該注意的關鍵處，這對爭取時效的病症來說是相當有說服力的。",
    },
    {
      content:
        "迄今全世界有數百家醫院採用該方案，主要的做法為電腦自動提供「建議」、「可以考慮的建議」及「不建議」三種治療方案，腫瘤科醫師再以自己的臨床經驗，判斷適合病患的治療方案。",
    },
    {
      content:
        "經過近兩年的全球測試，原本應該為醫療保健領域帶來革命性的改變，然而在醫療隱私、診療效果爭議及其他類似商品之劇烈競爭下，再加上幾件與大型醫院的合作也因無具體成效叫停。",
    },
    {
      content:
        "其中與癌症治療鼎鼎大名的MD Anderson醫學中心投下至少6000萬美金巨資，結果幾乎所有預設的目標都一再延後而無法達成，甚至於IBM公司宣稱在特定癌症治療建議之種類，也不斷更換卻從來沒有成功過，最終以撤資失敗收場，可說到目前為止醫療資訊問答（QA）系統之發展成果不盡人意。",
    },
    { contenttitle: "德國" },
    {
      content:
        "同一時期於德國柏林成立的醫療科技公司Ada Health，則採取了截然不同的商業模式，公司初期由設計量身訂作之QA醫療對話機器人，轉變其商業模式而成為個人化的醫療知識提供者，由專任之醫師與研究人員集結了大量經過篩選與註解之醫學文獻。",
    },
    {
      content:
        "這些有價值的醫學文獻，提供了讓使用者相當滿意的客製化知識來源，同時也能像家庭醫師呵護患者及家屬一般，隨時提供豐富的醫療知識，以確保由個人到家庭進而到社區的完整健康照護網。而這樣的經營模式，似乎相當受到西歐國家的青睞。",
    },
    { contenttitle: "英國" },
    {
      content:
        "此外，在英國倫敦2013年成立了Babylon Health新創醫療科技公司，目前市值近20億美元，則是透過手機行動裝置上的簡訊與視訊互動，提供醫師或醫療專業醫護人員之醫療諮詢建議，目前該項醫療服務已經擴展至數個國家包括英國的病患都在使用中。",
    },
    {
      content:
        "該公司一年前曾與英國國家健康部（NHS）合作，推出一個很方便的QA醫療知識對話機器人，該智慧型對話機器人在幾項疾病症狀檢視上，號稱幾乎可以達到與一般臨床醫師同等的專業度。",
    },
    {
      content:
        "後來該對話機器人基於病患診斷安全因素的考量而被下架，網路一片譁然，甚至有人宣稱是英國政府，刻意拿著放大鏡在檢視該服務才會如此。",
    },
    {
      content:
        "目前該公司已進一步推出一項服務稱為「醫師在手」（GP at Hand），可以允許付費會員直接送出醫療上的問題或是照片，然後由該公司的後台醫療服務團隊包括合格的醫師、護理師或治療師負責回應。",
    },
    {
      content:
        "使用者甚至可以直接使用手機與臨床醫師對話，直接回應的問題通常包括常見的醫療主題，像是發燒、喉嚨痛、過敏、皮膚發炎或是感冒等問題，同時也能轉介會員給更適合的專科醫師，或以電子郵件直接郵寄處方箋給會員到就近的藥房購買適合的藥物。",
    },
    {
      content:
        "可想而知，坊間及社群網友對於該產品的認知程度相當兩極化，部分會員推崇備至，其他人則不推薦，甚至還有醫師撰文批判其可能之風險。",
    },
    { contenttitle: "中國" },
    {
      content:
        "中國近幾年也興起了幾個相當受一般民眾歡迎的線上問診網站，「尋醫問藥網」公司就是一個很好的例子。該公司的快速問診服務號稱有問必答，在中國的相關醫療法規對於該範疇尚未明文規定的情況下，該項服務仍遊走於法律邊緣，亦即使用者必須自行評估醫療資訊是否合理。",
    },
    {
      content:
        "此網站初期主要之產品定位為提供醫療資訊，類似醫療版的專用搜尋引擎。透過強化使用者提問之使用體驗，逐漸吸引使用者以增強其黏著度，如同行銷公司般結合醫療院所為患者或一般民眾服務。",
    },
    {
      content:
        "除了經營社群平台粉絲團，在過去的十餘年間默默蒐集了數千萬筆使用者問診的資料，甚至主動提供「好醫師推薦平台」，讓名醫能夠化身為「網紅」，與病患近距離接觸，進而增加病患之黏著度。",
    },
    {
      content:
        "目前其服務涵蓋從診療前的線上自我檢查、線上問診諮詢、專家電話諮詢、藥品查詢以及購買非處方用藥等。同時該公司為了實現真正的線上醫療，還提供了找專科醫生、推薦藥品、提供健康資訊及健康百科知識等功能；此外，網路預約掛號、疑難重症的名醫電話問診，以及診後的康復、看診時之資料追蹤、健康管理等完整的就醫環節皆已納入考量。",
    },
    {
      content:
        "在這個平台上，可以看到整個醫療健康產業鏈的生態系；如各方角色的扮演，包括醫療院所、醫藥產業、醫藥物流、保險公司以及與診斷相關的醫療器械等，當然背後也牽動了整個醫療體系和完整的健康產業鏈。此外該網站也建立了一個完善的藥品知識庫，將藥品和症狀匹配，提供使用者有參考性的建議。",
    },
    {
      content:
        "在平台的後端也有付費的醫生和執業藥師提供用藥諮詢，可見單是在藥品的議題上，已經逐漸建立了完整的行銷電商平台，其最終目標是完成從醫到藥流暢使用之整合，可以看出是商業行銷相當成功的醫藥網購公司。",
    },
    {
      content:
        "無庸置疑的是，不可能有任何一位醫師能夠像電腦一樣，精準地記得每一篇醫學文獻記載或是每一個醫療案例，醫師有可能會看診疲勞、有診斷的盲點或偏見，甚至於生病，這些因素都有可能影響判斷力，當然這也正是電腦系統的絕對優勢，端視這一群電腦科學家如何將這些優點發揮到極限，甚至落實到臨床應用上。",
    },
    {
      content:
        "醫療實務上較為細節與複雜的情況，仍需要專業醫師來判定，但簡單的問題可以使用機器人自動回覆即可，如何讓對話機器人結合充足的醫療知識，給予使用者正確的回覆，進而獲得良好的使用者體驗，是未來智慧醫療很具挑戰性的議題。",
    },
  ],
  [
    {
      title: "AI風潮來襲！人工智慧的醫療照護應用",
    },
    { author: ["孫永年", "https://scitechvista.nat.gov.tw/c/sTkT.htm"] },
    {
      picture: [
        "https://scitechvista.nat.gov.tw/context/image/jpg/b9824617c064c46c87dca521db638bcd2656ce875318449ffa8f4d2f6c6652ac.jpg",
        "近年來，國內外積極推出智慧健康照護機器人，銀髮族藉由聲控方式與機器人對話，從對話與數據傳輸進行遠端諮詢與簡單健康檢測。",
      ],
    },
    { contenttitle: "人工智慧的巨變來臨" },
    {
      content:
        "人工智慧（AI）正悄悄轉變你我的生活，最常見的就是人手一支智慧型手機。AI在手機內已有許多應用，像是能對話的語音助理、記錄與統計個人日常習慣、行程提醒、地圖導航、健康管理等，使生活更省時有效且便利。但在眾多的AI新技術中，醫療保健方面的應用特別受到重視，也會對人類生活產生很大的影響。",
    },
    {
      content:
        "日本於2017年公布醫療保健產業是其AI三階段工程之一。韓國也於2016年選定AI為國家戰略計畫，將成立國家級AI老人照護中心。英國於2018年宣布，將從愛丁堡、牛津、里茲等城市開始推動全新的AI保健產業，應用AI技術協助醫療診斷，預估15年內可降低國內10％的癌症死亡人數。同時，倫敦大學醫院將與圖靈研究所合作，成立AI系統接手該院部分醫事人員的工作，以提升醫療服務效率。除了許多國家積極推展AI醫療照護政策外，著名的科技大廠也都積極在AI醫療生技領域布局。",
    },
    { contenttitle: "人工智慧的巨變來臨" },
    {
      content:
        "近年來，AI也廣泛運用在各式產業中，不單應用在生產機器上。資誠聯合會計師事務所的《全球人工智慧研究報告》指出，AI對產業潛力影響指數，依序在醫療、汽車、金融服務、運輸、物流、技術、通信、娛樂、零售、能源、製造業等之中，已創造出有別於傳統的產業經營模式。",
    },
    {
      content:
        "這個功能強大的AI到底是何方神聖？簡單說，就是把人類的智慧利用學習演算法教導機器，使機器經過學習後能精確呈現其功能。機器通常需要依據大量的資料蒐集與數據統計，然後有效學習人類能做的事，建立模擬人類智慧的處理系統。系統具有類似人類的智慧，但有更快速、穩定且不會疲累的特性。",
    },
    {
      content:
        "AI醫療影像診斷會越來越廣泛地應用到各種疾病的臨床診療中，使診斷的時間縮短、準確度與可靠度提升、更快速呈現數據統計資料，以便直接有效幫助臨床醫療與照顧，避免人工過勞、精簡醫療成本。",
    },
    {
      content:
        "美國食品藥物管理局於2018年批准AI眼部診斷軟體IDx-DR上市，是第1款獲准上市的AI醫療診斷軟體，能協助醫師更早發現糖尿病患者的視網膜病變。IDx-DR是一不需經臨床醫師解讀影像，便能直接提出診斷篩查的器材。由於醫療人士不見得都具眼科專業，因此這器材對他們而言相當實用。",
    },
    {
      content:
        "谷歌旗下的DeepMind公司利用大量視網膜圖像，訓練AI算法用以檢查眼疾，其診斷結果能達到與醫生相似的水準。另外，也針對視網膜病變建立影像資料庫，開發AI判讀軟體。此外，針對各種不同的疾病，各式深度學習技術也正快速建立具高效率與準確度的系統。人類各種器官與各類疾病的病理與治療，都有團隊積極投入研究。",
    },
    {
      content:
        "另一方面，醫院已開始運用初階的醫療機器人。例如，英國的AGV醫療機器人能送餐、消毒及攙扶病人。至於高階的AI醫療機器人，則以醫療手術為發展重點。台灣許多醫院也已購入機器人手臂「達文西」或其他機器人，把影像導引手術實際運用在手術房內。",
    },
    {
      content:
        "在智慧醫院的應用方面，則希望能改善醫療品質，縮短看病的繁瑣流程，減輕醫護人員的負擔。在硬體方面，從所有設備的安裝設置，一直到管理中心的建立，必須讓醫院能整體有效地串接運作。因此，如何運用設備、保護病人的資料安全，醫院都應有詳細的規畫。系統的智慧化與人員的教育訓練也需受到重視，同時提供諮詢，避免因醫護人員的錯誤造成醫療糾紛。智慧醫院服務可多元化推廣延伸，譬如社區或居家醫療也可提供網路諮詢，增加醫療照護的深度與廣度。",
    },
    { contenttitle: "AI應用於長照：提供簡單健檢與輔助醫療照護" },
    {
      content:
        "2018年，內政部指出台灣社會人口結構已正式進入高齡社會，人口老化的速度快到難以想像，銀髮族的照護工作將何去何從？目前，台灣老人健康照護的需求與照護人力快速失衡。老人照護除了亟需人力外，費用也大幅度提升，造成許多家庭的龐大負荷，和人力資源供需不平衡的問題，現在大多仰賴國外看護移工。但這並非長久之道，如何利用AI提升老人照護的效率與品質值得重視。",
    },
    {
      content:
        "因應照護人力的短缺，可把智慧照護導入每個家庭。首先，希望能藉由遠端平台利用網路讓銀髮族可以線上問診。其次，提供資訊互動平台，銀髮族每天可在家自行測量生理指數，結合手機APP把資料上傳至雲端照護系統，使銀髮族在家就能提供健康狀態，並與醫療人員聯繫。",
    },
    {
      picture: [
        "https://scitechvista.nat.gov.tw/context/image/jpg/e90d4d099bd7b8aa55723594e944853a8b7deacbb67c6191b9d45414d711c56a.jpg",
        "建置具多層次學習能力的語音對話居家照護機器人。（圖／蔣榮先教授實驗室）",
      ],
    },
    {
      content:
        "近年來，國內外積極推出智慧健康照護機器人，銀髮族藉由聲控方式與機器人對話，從對話與數據傳輸進行遠端諮詢與簡單健康檢測。機器人甚至還有陪伴的功能，能緩解照護人力的不足。",
    },
    {
      content:
        "對於銀髮長者而言，新的AI照護機器人將可提供日常運動教練、營養諮詢與輔助醫療照護。在有醫療需求時，更可即時協助關注長者健康狀況，提供醫療與照護，是子女有效關注年長父母的好幫手。另一方面，在一般民眾家中，居家照護機器人藉由語音對話，依個人需求提供服務，使家中成員能享受簡單的醫療服務與方便獲得生活資訊。孩童也能利用圖像表情和聲音互動學習，增添生活樂趣。",
    },
    { contenttitle: "人體基因資料庫：提供個人化精準醫療" },
    {
      content:
        "AI在醫療領域中的應用，都需要建置大數據的資料庫。過去，患者看病問診大都依感覺敘述及基本檢查，由醫生經驗診斷再加以治療。精準醫療則利用基因檢測、蛋白質檢測，再加上患者的個人資料，彙整成人體基因資料庫，從中比對分析，提供更準確且個人化的治療方式。如果能把人體資料庫追溯到過去，了解整段疾病的發展，透過科學研究探討疾病的因果關係，更可達到有效預防。",
    },
    {
      content:
        "目前，中研院針對精準醫療的需求，建置「台灣人體生物資料庫」，蒐集國人生物基因數據，提供學者研究使用，希望能改善國人健康，有效預防疾病。但資料庫所需的資料蒐集還需花好幾十年的持續追蹤才能廣泛運用。",
    },
    {
      content:
        "另一方面，台灣從實行全民健保至今，已擁有數千萬筆的看診資訊，成為一個巨量的資料庫。今後期望能妥善結合健保資料和AI技術，把資料變成數據平台創新應用，讓醫療達到最好的效果。但除必須做到資料的去除識別與妥善運用外，對於病患的個人隱私、公眾利益等問題，也需要依法審慎處理。",
    },
    {
      picture: [
        "https://scitechvista.nat.gov.tw/context/image/jpg/a7e521207bbe8e074cd9bc650116b16f99d06f680e195aaf3a7568f7c5afa36e.jpg",
        "修改圖說：AI照護機器人可以提供銀髮長者日常運動教練、營養諮詢與輔助醫療照護。（圖／種子發）",
      ],
    },
    { contenttitle: "國內AI醫療運用的研究" },
    {
      content:
        "在我國政府大力推動AI研究與產業發展的政策下，科技部於2018年啟動AI創新研究中心計畫，從五百餘件構想書中選出67件研究計畫，分別在臺、成、清、交4所大學成立AI創新研究中心。",
    },
    {
      content:
        "成功大學的「科技部人工智慧生技醫療創新研究中心」專注在生技醫療的研究，涵蓋智慧醫療、智慧照護、智慧生技等領域。智慧醫療研究包含結核分枝桿菌鑑定、肝活體組織切片影像分析、阿茲海默氏症早期檢測、核磁共振影像快速重建、生醫影像類神經電路驗證平台。",
    },
    {
      content:
        "智慧照護研究則包含老年人和糖尿病患者的居家照護機器人、高齡健康促進系統、超高齡社會的健康生活等。智慧生技養殖與人工智慧倫理方面也有3件研究計畫。除了積極進行各項技術研發外，也進行生醫影像及醫療紀錄的大數據資料庫蒐集。",
    },
    {
      content:
        "台灣的醫療水準優異，資通訊技術基礎雄厚，加上醫療照護需求日增，已經具備讓AI醫療照護技術與產業發展的良好條件。雖然醫療照護產業通常需要較久的熟成期，但在產官學研強力投入下，將能有效培養產業所需的AI人才，提升專業與應用的水準。",
    },
  ],
];

export const industryLabel = [
  [
    {
      title:
        "「有些企業根本不適合工業4.0！」智慧製造第一步：換腦袋、重新定義組織",
    },
    {
      author: [
        "蔡紀眉",
        "https://www.bnext.com.tw/article/46401/industry-4.0-tips-automation-manufacturing",
      ],
    },
    {
      picture: ["https://cdn.bnextmedia.com.tw/img/3x2.png", " "],
    },
    {
      contenttitle:
        "雖然工業4.0已經從概念走向應用，但多數人談論時，依然把焦點放在技術，這會限縮它的效益。",
    },
    {
      content:
        "轉型、升級、接班──是台灣產業界目前同時面臨的三件大事，這將是所有產業的另一個契機，同時也是全新的生存之戰，期間變化將形塑台灣的工業4.0樣貌，毫無疑問，這次變革也會對下一個十年的產業競爭定調。",
    },
    {
      content:
        "這一次，是台灣絕佳的機會，但也是挑戰最大的一次。若比較傳統經營成本，像是人力、土地、設備，台灣都沒有絕佳優勢，而中國、東南亞又一直在進步；美國、歐洲更急著想把製造業拉回本土。現在，跟台灣搶飯碗的人變多了，我們只有把自己的價值不斷往上拉。",
    },
    {
      content:
        "因此，科技業以外的產業−−傳統產業，開始起身琢磨工業4.0。原因很簡單，第一，軟硬體工具變多，成本下降、取得容易，這是誘因。第二，產業需求改變，過去30年以標準化製造為主，產品生命周期長，工廠內有不同設備，就像八國聯軍。但現在，市場競爭激烈，傳產也走向個人化、客製化，產品生命周期縮短，產線、材料、製程要一直改變，設備開始連網、要求品質一致，這些都將導致成本的定義被翻轉。",
    },
    { contenttitle: "工業4.0第一步：重新定義組織" },
    {
      content:
        "然而事實上，有些企業根本不適合工業4.0。好比說，中部有些機械業者已經在國際間小有名氣，只需要再升級一點點智慧製造，也許是用現有設備加上一些感測器，工廠就能連線，讓整體的營運管理更有效益，並不需要一口氣花幾十億元，只為添購所謂的工業4.0新設備。",
    },
    {
      content:
        "又或者是，傳統師徒制的組織設計，導入智慧製造只是白做工而已。因為工業4.0的目的，就是要把師傅的經驗換成數據，可以複製、學習，但如果組織跟人沒變，只是用一台最先進的機器人，很快就落伍了，越南、緬甸都可以做到，還比台灣便宜。",
    },
    {
      content:
        "很多人談工業4.0，九成以上都在講技術、自動化，但自動化、機器人不過是工具之一，重點還是觀念要變、要換腦袋、組織要重新定義，不然就算你花10億、20億的資金導入自動化設備，都不會有好的效果。對傳產來說，該思考的是如何利用自身優勢因應變局，從組織改造開始就是其一。",
    },
    {
      content:
        "現階段的工廠設計、製造模式，都是從上一波工業革命就定下來的沿革，分工細、規格化、極權式，但在工業4.0中，新做法卻是分散式、協同式，強調生態系，可能跟供應商、客戶也要資料共享，對「組織」的定義與過去截然不同。",
    },
    {
      content: "未來，製造不再會是核心，也許核心會是服務、是行銷、是數據。",
    },
    {
      content:
        "過去，只要把硬體做好就有生意了，現在的硬體是半買半相送，服務才是重點。未來，企業要整合軟體、硬體、韌體、平台內容和服務。",
    },
    { contenttitle: "發揮群聚製造優勢，台灣要走自己的路" },
    {
      content:
        "台灣在工業4.0中，還有一大優勢，我們的溝通成本幾乎是全球最低。從台北到高雄，這將近400公里的西部廊帶，錯落各式各樣的生產聚落，像是北部的半導體、中部的精密機械、南部的光學，其間還穿插有傳統產業，這麼短的距離，把這麼多元的核心放在一起，全世界找不到第二個。群聚，就是我們的DNA，而新製造的想法，就是在追求把群聚做起來。",
    },
    {
      content:
        "弔詭的是，我們總習慣跟全世界第一名比，好像沒有得到第一就會失落，但我認為，第二、第三名已經很厲害了。過去兩個30年，台灣打下了扎實的製造能力，累積深厚的基礎，製造這條路，適合台灣繼續發展，不要妄自菲薄。",
    },
    {
      content:
        "過去，只要把硬體做好就有生意了，現在的硬體是半買半相送，服務才是重點。",
    },
    {
      picture: [
        "https://bnextmedia.s3.hicloud.net.tw/image/album/2017-09/img-1506757112-95992@600.jpg",
        "陳婉玲/製圖",
      ],
    },
  ],
  [
    {
      title: "工業4.0大全，從淺到深一篇搞懂它！",
    },
    {
      author: [
        "SEMI Taiwan",
        "https://blog.semi.org/zh/%E5%B7%A5%E6%A5%AD4.0%E6%A6%82%E5%85%A8",
      ],
    },
    {
      content: "生產一個客製化的產品，需要多久時間？答案是58秒。",
    },
    {
      content:
        "這並非未來，在工業4.0的時代，是現在進行式。2013年德國《高技術戰略2020》十大未來專案納入工業4.0項目，投資金額高達2億歐元，提升製造業電腦化、智慧化，至今5年，從概念到實踐，領頭企業腳步飛快，透過虛實整合、數據分析使用者（消費者）決定生產方向、服務內容、創新商業模式。",
    },
    {
      picture: [
        "https://blog.semi.org/hubfs/%E5%B7%A5%E6%A5%AD4.0%E6%A6%82%E5%85%A8.jpg",
        " ",
      ],
    },
    {
      content:
        "工業4.0的目標，並非創造新穎的製造技術，而是整合現有的製造資源、銷售流程、大數據，建立能夠快速反應市場需求、精準生產、減少成本浪費、跨領域合作的製造產業。",
    },
    {
      content:
        "SAP物聯網資深副總裁凱瑟（Thomas Kaiser），接受天下雜誌訪問時表示：「技術和製造不再是重點，產品只是載具，重點是隨產品而來的服務。這是商業思惟和商業模式的深度改變。」",
    },
    {
      content:
        "未來，商業模式不是由生產者驅動，而是從買方出發，驅動研發、供應鏈、整個生產系統與服務。改變的速度很快，跟得上腳步，就能掌握風口。",
    },
    { contenttitle: "何謂工業4.0？" },
    {
      content:
        "工業4.0英文為：Industry 4.0，意思是「第四次工業革命」。綜觀工業歷史，從工業1.0使用蒸氣為動力，出現機械代替勞力；工業2.0以電氣為主要動力，進入電氣化時代；工業3.0以電腦協助人力製造，進入數位控制時代；到了工業4.0，則是以「智慧製造」為革命重點。",
    },
    {
      content:
        "「智慧製造」是將物聯網、數位化工廠、雲端服務、通訊等技術緊密扣合，創造虛實整合的製造產業，徹底改變一直以來的製造思維。工業4.0的價值是利用物聯網、感測技術技術連結萬物，機械與機械、機械與人之間可以相互溝通，將傳統生產方式轉為高度客製化、智慧化、服務化的商業模式，可以快速製造少量多項的產品，因應快速變化的市場。",
    },
    {
      content:
        "除了製造智慧化，過程中電腦也可記錄各種數據，成為重要的資訊資料庫，藉由大數據分析優化製造與服務流程，幫助企業創造巨大的競爭力。Google、亞馬遜等網路巨頭，皆擅長利用巨量數據分析，提供消費者更好的服務體驗，甚至和西門子（Siemens）等專業智慧型技術企業進行跨領域結合，開創工業4.0領先趨勢。",
    },
    {
      content:
        "整體而言，工業4.0是連結虛擬與現實的橋樑，讓製造過程高度智慧化，逐漸成為製造主流。",
    },
    { contenttitle: "何謂工業4.0？" },
    {
      content: "",
    },
    { contenttitle: "工業4.0與過去工業發展的差別？" },
    {
      content:
        "在過去傳統工業1.0-3.0的時代，是以大量製造降低成本，再大量販售的商業思維，然而隨著網路技術發展浪潮，資訊快速流通，市場追求新穎、獨特的產品，傳統大量製造模式已不一定適用，加上人力成本日漸高漲，對企業來說是龐大的負擔。而工業4.0結合網路與機械，生產快速、產品多樣化，讓企業降低製造成本、提升競爭力，才能因應多變的市場需求。",
    },
    { contenttitle: "工業4.0影響了什麼？" },
    {
      content:
        "工業3.0時代，廣泛應用電子與信息技術、資料庫系統、模具，讓製造過程自動化，設計、製造、組裝、分析都在電腦系統中完成，大幅度提高研發效率，降低生產成本。以工業3.0電子信息化為基礎，連結與優化是工業4.0的核心精神。",
    },
    {
      content:
        "連結製造相關元素，進行優化，大量運用自動化機器人、物聯網感測、供應鏈互聯、銷售及生產大數據分析，人機協作優化生產流程，提升生產力及品質，以增進企業競爭力與獲利，達到單一批量只有一件也可生產的客製化目標，進而提高消費者的互動黏著度。",
    },
    {
      content:
        "例如，過去知名運動品牌如NIKE、PUMA等，一向是以替運動明星開發專屬商品，拉抬品牌知名度，然而，2012年NIKE推出客製化運動用品服務，消費者可上網選擇自己喜歡的鞋子材質、顏色、花樣等，鞋子就會送到家中。就是工業4.0實踐高度客製化很好的例子。",
    },
    {
      content: "工業4.0分為三大項目：",
    },
    {
      content:
        "智慧工廠：研究生產系統及過程智慧化，以網路連結生產設施，人機協作、提高效能。智慧工廠最重要的目標，是「批量一件也可以做」的高度客製化需求，要達到此目標，仰賴邊際運算、人工智慧、數據分析、感測系統等技術，例如ERP、MES等系統架構，結合網路連結機械設備與人力，並配合人工智慧、邊際運算與數據分析輔助，讓製造流程最優化，將傳統工廠從「自動化」中數位轉型。",
    },
    {
      content:
        "智慧生產：智慧製造指的是應用網路、感測等技術，分析數據後建立一個從原物料、產品製造、企業經營、包裝配送等自動化供應鏈。讓企業提升整體生產物流管理、人機互動以及3D技術的生產應用能力。此項目特別注重中小企業，讓中小企業從智慧生產技術中受益，進一步成為工業生產技術的創造者和供應者。",
    },
    {
      content:
        "智慧物流：智慧物流，指的是以資訊技術為基礎，在物流過程中的運輸、倉儲、包裝、搬運、加工、配送等環節，建立感測系統，分析資訊、即時調整，也通過網際網路、物聯網、物流網，整合物流資源，充分發揮現有物流資源供應方的效率，不僅降低成本，也讓買方能夠即時獲得訂購商品，符合網路發展浪潮，讓物流業自動化、網路化、可視化、即時化，實現物流規整智慧、發現智慧、創新智慧和系統智慧的目標，有利於降低物流成本、控制風險，進而達到提高環保效益與配送效率的效果。",
    },
    { contenttitle: "工業4.0所需要的技術基礎" },
    {
      content: "發展工業4.0，轉型智慧製造，需要以下三大基礎：",
    },
    {
      content: "一、物聯網（網際網路）",
    },
    {
      content:
        "自動化系統必須透過RFID辨識技術、紅外線感應、光線掃描、定位系統等技術，連結所有物品，讓彼此之間訊息能夠交流，建立智慧識別、定位管理的工作系統。",
    },
    {
      content:
        "物聯網技術已受到國際間高度關注。美國將此列為經濟與國安的關鍵，規劃以物聯網、雲端運算為核心的「智慧地球」計劃，受到政府大力支持。在台灣，物聯網逐漸應用在產品製造、節能減碳、品質管理等面向，例如設備監控、原料庫存等領域，都得到良好的效果。",
    },
    {
      content: "二、雲端運算",
    },
    {
      content:
        "雲端運算是一種可以隨時隨地配置資源的公共空間，能夠以最低成本管理、使用，大致分為三類：公共雲、私有雲、混合雲。",
    },
    {
      content:
        "目前在工業設計、工業模擬、線上軟體、數據中心等需要大量運算能力的領域，有很好的應用機會，例如模擬汽車碰撞、虛擬裝潢等，企業不用購買昂貴的軟體，只需要支付平台商服務費用，即可使用如CAD、CRM等軟體，替企業節省可觀的成本。",
    },
    {
      content: "三、大數據",
    },
    {
      content:
        "隨著科技發展，數據資料量呈現爆炸性成長，電腦的處理能力也遠超過人類所及，因此大數據成為產業發展的顯學。數位化的時代，人的一舉一動都會留下數據，因此從數據中可以窺見人類行為模式，從中找出市場需求，成為企業未來提高競爭力、創新力與盈餘的關鍵。",
    },
    {
      content:
        "不只是企業重視數據分析，政府也同樣明白其重要性，例如美國政府編列預算，以適當的政策協助產業發展Big Table、商業智能、雲計算、Cassandra、數據倉庫、數據集市、分散式系統、Dynamo、GFS、Hadoop、HBase、MapReduce、Mashup、元數據、非關係型資料庫、關係型資料庫、R語言、結構化數據、非結構化數據、半結構化數據、SQL、流處理器、可視化技術等大數據分析技術。",
    },
    {
      content:
        "而在這一波工業4.0的浪潮下，企業與政府正共同努力，持續朝數位轉型的方向前進。結合物聯網、機器人、感測技術、數據分析的智慧工廠一一成立，延伸到「智慧物流」、「智慧服務」，帶動產業升級。",
    },
    {
      content:
        "未來，企業在AI人工智慧、邊際運算與數據分析的輔助下，整合資訊、優化供應鏈、跨產業合作創新，提供消費者更好的體驗，也擴大產業市場，預計到2020年，智慧製造的整體市場規模將會超過 3,200 億美元，尤其是工廠數位化、用戶體驗、人工智慧，將是最被重視的要素。",
    },
    {
      contenttitle: "工業4.0應用，如何改變你我生活？",
    },
    {
      content:
        "「SoLoMo」，意指Society（社會的）、Local（在地的）、Mobile（移動的），整合虛實信息，提升產品價值，就是工業4.0的產業模式。例如：生產老人防走失器，透過互聯網的平臺，可以遠端定位和觀察使用者動態；或是將住家與工廠的監控系統與手機相結合，從手機上就能實時收看所有監視器情況等，都是很好的應用實例。",
    },
    {
      content:
        "再以自動化工具機工廠為例，傳統製造流程裡，工程師先藉由電腦輔助編寫程式，傳送到製造工具機，工具機便開始作業，但若是過程中出現故障，必須依靠人力排除才能繼續作業，無形中浪費許多人力與時間成本。而在智慧工廠中，透過雲端系統、資訊分析，可以即時偵測刀具的破損及負載異常，提早發現問題、及早排除，剩下維修的時間、金錢與人工成本；也能在工作人員設定好排程後自動開始作業，透過溫度的系統監控品質、縮小誤差，提升產品的精確度。",
    },
    {
      content:
        "但是，有些工廠雖然已有機械自動化設備，但是距離工業4.0，仍有一段差距。原因在於，工業4.0的重點是強調人與機械的溝通、機械與機械之間的智慧結合，創造智慧化的生產鏈，而非只是用機械取代部分勞力，若生產流程無法因為機械設備的輔助而變得更靈活、快速、有彈性、並收集相關資訊，那並非工業4.0的價值。",
    },
    {
      content:
        "例如，由機械手臂取代某生產線上的裝配勞力，但若因市場需求而擴張、縮減或更換製程，機械手臂必須能即時切換且不影響交期，才是工業4.0成為未來趨勢的原因。",
    },
    {
      content:
        "另外，機械功能的多樣發展，也是工業4.0的重點之一。機器人可依照需求擁有視覺（攝影）判別功能，可判讀顏色、形狀、位置等資訊，加上手眼整合、連結物聯網、感測器，就能精確完成裝配揀選的工作，對於3C產業、加工或食品業來說，是提升競爭力的方式之一。",
    },
    {
      content:
        "人機互動的安全，也是工業4.0所重視的價值，其安全措施包括碰觸即停、發出聲響警戒、讓工作人員及時動作調控等。在機器人中安裝感測器，偵測工作中的異樣，並將資訊回傳至雲端，預防故障，使人機工作可以更有保障。",
    },
    {
      contenttitle: "工業4.0如何帶動企業成長？",
    },
    {
      content:
        "未來市場會變成什麼樣子？根據統計，2025年，全球75%的勞動力是千禧世代，人口老化加上少子化，所以勞動力減少，而製造數位化有助於千禧世代投入，機械人也可以替代部分人力，人力短缺的問題就可以得到解決。",
    },
    {
      content:
        "另外，在全球化的影響下，預估2030年企業產品出口量會是目前的3倍，開發中國家甚至成長4倍，科技就是幕後推手，自動化系統、智慧工廠有助於降低跨國貿易與製造流程管理的挑戰。",
    },
    {
      content: "智慧工廠是趨勢，包含幾個特點：",
    },
    {
      content:
        "感應器會裝設在工廠內所有設備、物料、半成品、成品中，除了監控生產過程，也可以記錄所有數據，加以分析，藉以提升生產品質使消費者產生信賴感。",
    },
    {
      content:
        "大量使用機器人自動化生產，結合IT進行即時品質監控取代傳統人力監控，減少人力成本、提高效能、穩定品質。",
    },
    {
      content:
        "全面自動量測（AOI、ATE、機器手臂等）進行細微的校準調整，也可以因應訂單的改變即時製造產品。",
    },
    {
      content:
        "利用現場監控系統，採集大量生產設備及產品資料，傳送到雲端伺服器，透過Big Data分析，提高決策的正確度。",
    },
    {
      content:
        "累積大量消費者數據，分析瞭解客戶習性、預測客戶需求，商業模式從B2C走向以客戶需求為起點 ，「多樣少量」C2B的客製化生產與銷售，讓客戶回流。",
    },
    {
      content:
        "市場瞬息萬變，智慧工廠讓企業能夠快速應變、滿足市場需求，以日漸優異的資訊科技、雲端營運管理技術，改變傳統商業模式思維，提升競爭力與市佔率。",
    },
    {
      content:
        "工業4.0的發展影響是長遠的，為因應快速變化的市場，許多企業選擇將製造工廠設置在靠近客戶的地方，可以挖掘更多需求，即時作出反應、提供客戶所需要的服務。因市場對生產線的彈性需求大增，如何讓機器人工作流程更加順暢、快速是企業在轉型智慧工廠時，必須思考的問題。",
    },
    {
      content:
        "另一方面，智慧工廠可以24小時持續運作，大幅降低製造成本、取代廉價勞力，加上感應器可以在過程中收集大量數據，透過演算法分析可以大幅優化流程，提升生產效率。加上物聯網讓企業重新思考工廠設備之間的架構，企業如鴻海、甲骨文、西門子等國際知名大廠些在積極佈局，全力發展工業機器人、自動化，以及智慧工廠。",
    },
    {
      content:
        "總結工業4.0帶來的影響，對亞洲地區而言，過去低價的人口紅利已漸漸失去，傳統壓低人力成本的製造思維已不適用，必須尋求其他替代方案，建立更有效率的生產方式，來承接需求多樣的訂單，因此機器人、自動化生產、智慧工廠逐漸蓬勃發展，出現各種創新的應用模式。",
    },
    {
      contenttitle: "半導體產業如何轉型工業4.0思維？",
    },
    {
      content:
        "工業4.0是高科技與通訊技術的結合，讓生產部門得以拓展，回應日漸複雜的市場需求，因此相關的技術與設備就非常重要。大多數的半導體企業，都有潛力轉化為自動化工廠，或是透過加裝簡單的設備就能建立自動化系統。但是，半導體企業若只是延伸其感測器與其它半導體元件的範圍是不夠的，現有產品的範圍必須要以通訊和低功率微處理器技術予以擴展。",
    },
    {
      content:
        "另一個轉型關鍵，就是必須具備新思維。維持硬體利潤越來越困難，企業要思考的是，如何創造其他優勢賺取利潤？麥肯錫管理公司提出有助於硬體公司轉型軟體思維的建議：",
    },
    {
      content:
        "高階領導人必須將企業轉型納入營運策略中，帶領團隊制定完整計畫。軟硬體團隊必須溝通協調，對於目標、時間表、須具備什麼功能等等事項有共識，了解彼此的進展。",
    },
    {
      content:
        "發揮硬體優勢與軟體價值，認清現有的優勢與危機，例如忠誠的客戶、專利技術、品牌形象尚未建立等等，從中挖掘新的價值或制定新的定價策略，例如：使用固定訂閱服務，定期向客戶收取費用，無論他們使用軟體多久或接受升級等，並提供吸引客戶的誘因，引導客戶購買。",
    },
    {
      content:
        "招募不同領域的人才。聘用不同領域、經驗豐富的領導人，結合其他產業的專長技術，較有機會創造出獨特的優勢。要轉型成功，公司必須要調整組織架構，而不是期待員工們改變工作方式 。",
    },
    {
      contenttitle: "台灣可以轉型工業4.0的優勢與劣勢",
    },
    {
      content: "各國皆大力發展工業4.0，台灣也無法置身事外。",
    },
    {
      content:
        "以美國為例，傳統美國製造業，為追求利潤壓低成本，長期將製造廠外移，因此國內少了許多就業機會，2008爆發金融海嘯，凸顯虛擬經濟與實體經濟脫節的嚴重性，今年美國政府大力推動製造業回流，獎勵企業在國內設廠，增加就業機會、改善經濟狀況，調整產業結構提高製造業比例，政策鼓勵加上開發中國家人力成本上漲，近年的確有相當多的企業製造回流，也堆動產業創新。",
    },
    {
      content:
        "具體的政策如，前總統歐巴馬於2011年宣布的「先進製造夥伴計畫」，包含：",
    },
    {
      content:
        "增強企業在地製造能力。縮短開發到應用的時間。開發智慧機器人。研發創新材料，降低能源消耗。",
    },
    {
      content:
        "以上政策發展方向，為美國工業4.0奠下基礎，建立符合環保趨勢與高效率的製造系統。而在人才培育部分，政府鼓勵各地發展在地化生產創新，與相關學術單位共同合作，培養出產業所需之人才與技術。",
    },
    {
      content:
        "再觀察比鄰的中國，數十年的爆炸式發展，中國將人口紅利發揮的很好，已具備完整的工業製造系統，然而過去以代工為主的商業模式，處於中後段的產業鏈流程，利潤與技術較低，市場很容易被其他崛起的新興國家取代，加上資源消耗巨大與污染問題，中國必須發展工業4.0力求轉型、突破困境。",
    },
    {
      content:
        "因此，政府推動「中國製造2025」計畫，結合民間力量，目標在未來十年間，掌握智慧製造的關鍵技術、結合網路與智慧製造系統，推動產業數位化。中國有許多工廠還停留在工業2.0階段，政府便會協助其利用網路連結整合機械與資源，提升服務體驗，朝工業4.0前進。",
    },
    {
      content:
        "例如，生產農業機械的雷沃重工，藉由遠端監控系統，可以即時掌握產品製造運作的狀態與品質，預防問題產生，消費者也能拿到品質更好的產品，提升消費體驗並縮減維修與售後服務成本。",
    },
    {
      content:
        "中國在高科技產業人才豐富，是唯一擁有所有工業類別人才的國家，也是全球最大的需求市場，具有大量生產的能力，成為發展工業4.0的優勢。",
    },
    {
      content:
        "台灣在工業4.0的發展上起步較晚，大型企業正在急起直追，中小型企業則還在摸索中，政府該如何聯合民間力量，協助企業（尤其是中小型企業）發展工業4.0製造模式，十分重要。",
    },
    {
      content:
        "例如，建立產、關、學溝通橋樑，針對工業4.0討論出明確的概念定義與轉型做法，讓業界有標準依循。目前，經濟部設立工業4.0推動辦公室，加強策略研究與企業輔導等作業，企業也須配合改造思維，承擔一定程度的改變風險。",
    },
    {
      content:
        "我國製造業面臨市場型態改變，及資源有限與高齡化/少子化等內在問題，經濟部工業局於2014年10月16日推出「生產力4.0計畫」，以中小企業為主要對象，鎖定智慧製造、智慧服務與智慧農業等三大應用 ，大量使用機器人生產加入工業4.0概念及物聯網技術，提升自動化生產流程，並結合雲端運算，將資訊即時分析處理。",
    },
    {
      content:
        "除生產流程優化，政府也聯合宏碁、 聯發科、研華等國內 30 多家廠商，簽署合作備忘錄，共同成立物聯網產業發展中心，聚焦於製造、醫療、 居家、智慧零售及公共服務等五大產業。",
    },
    {
      content:
        "包括製造業、服務業、科技業等產業，將物聯網技術導入後，企業可對搜集到的龐大的資訊，進行大數據（Big Data）分析，優化製造與服務流程，提升消費者體驗，進而拉抬競爭力。",
    },
    {
      content:
        "「生產力4.0計畫」十年為一期，整合國內代工製造、精實管理與智慧機械及資通訊優勢，運用物聯網、智慧機器人及大數據分析等技術，使產業邁入工業4.0。目標是十年內可讓一個人領兩份薪水、完成三份工作。",
    },
    {
      content:
        "2016年新政府上任，將「生產力4.0發展方案」，聚焦納入「智慧機械」、「亞洲‧矽谷」 及「新農業」等政策推動工業4.0，希望透過推動生產自動化、智慧化，減緩因少子化而導致勞動人口結構減少的隱憂、大幅提高生產力、創造產業成長動能，作為未來航太、精密機械、醫療及醫材等專業領域的發展基礎。",
    },
    {
      contenttitle: "工業4.0人才培育政府怎麼做？",
    },
    {
      content:
        "人才是產業發展的基石，面對工業4.0趨勢，不僅企業思考人才需求，政府也愈發重視。因應工業4.0浪潮，業界需要的以不僅是機械操作者，而是需要「控制者」和「管理者」，強化智慧設計、數據分析、虛實整合等跨領域能力。",
    },
    {
      content:
        "多年以來，經濟部、勞動部等相關部門，皆投入相當的資源舉辦職訓，協助半導體、數位內容、資訊服務、 機械、紡織、食品等產業，培育專業人才。",
    },
    {
      content:
        "然而，工業4.0需要更多跨界人才，教育部、科技部、經濟部、勞動部等相關部會結合正規教育體系與產業機構，研擬工業4.0發展計畫與產學合作的機制，雖然可解決學生畢業即失業的困境，但是對於工業4.0所需之跨界、多元能力人才、實質提升產業價值，並無太大助益。",
    },
    {
      content: "工業4.0人才培育，有三大挑戰：",
    },
    {
      content:
        "產業知識需跨領域整合應用，人才技能培育需更加多元。產學供需必須切合實際發展需要。大數據應用較為薄弱，企業雖有數據，但不知如何實際應用於轉型發展。",
    },
    {
      content:
        "因此，相關部會的培育計畫，也做了相當的調整。除了引進業師經驗分享，培養學生解決問題的能力，再以Maker形式讓學生累積實作經驗，也讓產業擁有即時戰力。",
    },
    {
      contenttitle: "台灣推動成功的案例？",
    },
    {
      content:
        "台灣企業轉型工業4.0最大的挑戰，是從人工管理思維轉換成數據管理思維，若能掌握數據分析管理的訣竅，即使是傳統產業，也有很高的機會轉型成功。",
    },
    {
      content: "紡織大廠 — 宏遠，就是很好的例子。",
    },
    {
      content:
        "根據媒體報導，台灣紡織業龍頭宏遠，光是 2016 年就創下超過80億營收的成績。宏遠成立於1988年，是遠東集團旗下的紡織大廠。客戶遍及全球包括 H&M、ZARA、Nike、The North Face 等知名品牌，每年為300 多個服裝品牌生產高機能、防水防風的科技布料。",
    },
    {
      content:
        "傳統產業能有如此亮眼的成績，可歸功於轉型工業4.0生產模式，打造台灣第一座工業4.0工廠，光是染色製程就能減少2/3的時間，精準度提升5%，一年可以省下約3000萬台幣。",
    },
    {
      content:
        "許多企業對於轉型猶豫不決，原因是在執行轉型的陣痛期間可能會影響原生產線的穩定運轉與營收，但宏遠循序漸進地轉型做法，確實可顯見工業4.0轉型的必要性，值得參考。",
    },
  ],
  [
    {
      title: "工業4.0──58秒的競爭",
    },
    {
      author: [
        "賀桂芬、辜樹仁",
        "https://topic.cw.com.tw/2016industry4.0/article.html",
      ],
    },
    {
      content:
        "4.0──58秒的競爭2016年中，天下再報導工業4.0，這次前進六個國家、九個現場，親訪德國的兩位大師，帶回「工業4.0不是自動化，而是整條價值鏈全週期管理與服務」的新觀念。\
          工業4.0，短短三年，從概念到實踐，速度飛快。\
          \
          西門子在安貝格（Amberg）的工業4.0示範廠，生產一台控制器，58秒，台台不一樣；BMW丁格芬（Dingolfing）的工業4.0廠，單機轉換塗裝顏色，58秒，輛輛不同色；奧普蒂瑪（Optima）生產一瓶香水，58秒，瓶瓶不一樣。\
          \
          單機能做到58秒製造完全不同的產品，是供應鏈、生產及客戶服務完全連網，點對點、端對端之間，反應速度大幅加快後的成果。\
          \
          「你生產的產品無法連網，以後不會有人跟你買，而你的產品就算能連網，你不善用連網產生的數據，會有別人來把服務你客戶的生意搶走，」推動工業4.0的先驅、《工業4.0：即將來襲的第四次工業革命》作者桑德勒（Ulrich Sendler），在德國慕尼黑接受《天下》專訪時指出，「這類事情來的速度，比任何人想像的都還要快，什麼都不做，等於自殺。」\
          \
          「你不會知道你的下一個競爭對手會從哪裡冒出來，」桑德勒舉他親眼見到的例子，一家小軟體公司，只是在電梯各處掛上監測器，就把電梯製造商的售後服務全都搶走，而且百分之百客製化。\
          \
          台灣一向專攻大量生產、代工製造。然而，「技術和製造不再是重點，產品只是載具，重點是隨產品而來的服務。這是商業思惟和商業模式的深度改變，」SAP物聯網資深副總裁凱瑟（Thomas Kaiser）表示。\
          \
          桑德勒明確指出，工業4.0的定義，是透過虛實整合，實時掌握與分析終端使用者，來驅動生產、服務，甚至是商業模式的創新。\
          \
          「一切商業活動的開端，始於買方，」桑德勒指出，工業4.0的定義，是「從服務顧客驅動研發、供應鏈和生產，整個系統或整個價值鏈的全生命週期管理與服務（SysLM）。」\
          \
          工業4.0和你我有什麼關係？\
          工業4.0讓個人專屬商品，不再只是名人特權，未來人人都可以擁有！\
          \
          Nike、Addidas等知名運動品牌一向有替運動明星開發專屬運動用品，拉抬自己品牌知名度的行銷策略。最有名的就是Nike的NBA籃球明星喬丹系列籃球鞋、PUMA替世界短跑名將波特量身訂做的金色短跑鞋，以及UA的NBA球星柯瑞籃球鞋。\
          \
          2012年底，全球第一大運動品牌Nike推出了一項客製化運動用品服務「NikeiD」，消費者可在Nike官網或App選擇自己喜愛的顏色、樣式、材質與鞋墊，輸入電腦系統後，隔一陣子，Nike就會將鞋子送到你家中。\
          \
          高度個人化商品對消費者來說，有獨特魅力，「因為他們可以創造屬於自己、獨一無二的產品，」在德國最早開發出大量客製化生產設備的全球包裝機械領導廠商Optima董事總經理索特（Martin Sauter）對《天下》說，「所以消費者會願意多付一點錢買個人化產品。」\
          \
          未來工廠的「全生命週期管理與服務」\
          生產流程各階段可以達到的功效\
          ",
    },
  ],
  [
    {
      title: "善用IAI工業人工智慧 打造無憂工廠",
    },
    {
      author: [
        "杜念魯",
        "https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&cat2=10&id=0000564303_dl82t8gg10ag5z2f9h5vd",
      ],
    },
    {
      content:
        "人工智慧(AI)的概念，近年來隨著各產業與領域中的普及應用導入，已經越來越為人所知。相較於人工智慧，更專注應用在工業生產領域中的工業人工智慧(IAI)則就相對讓人感到陌生。究竟人工智慧與工業人工智慧的差異為何，鴻海副董事長同時也是富士康工業互聯(工業富聯)副董事長李傑認為，工業人工智慧強調的是可靠的、有效的，及重複的，一旦做一次對，要做100次、10,000次都能重複，唯有透過工業人工智慧，才能打造最終的無憂工廠。",
    },
    {
      picture: [
        "https://mms.digitimes.com/NewsImg/2019/0716/564303-1-9H5VD.jpg",
        "鴻海副董事長、富士康工業互聯(工業富聯)副董事長李傑。符世旻",
      ],
    },
    {
      content:
        "李傑認為，人工智慧屬於認知科學，已經發展了相當長的一段時間，透過人工智慧的數據蒐集、累積與分析，幫助人類探索生活中增加智慧化的機會；但是，工業人工智慧則是一個系統工程，要能重複、有效、可靠地解決工業問題。過去，像是自動化等工業系統，協助製造業者達到了降低人力成本等目標。未來，透過工業人工智慧與工業系統的結合，要進一步的去發現、並解決生產過程中，過去所看不到的問題點，透過工業人工智慧，讓生產進一步能達到無憂的境界。",
    },
    {
      content:
        "至於要怎樣建立起工業人工智慧，先前李傑曾提到，工業人工智慧關鍵要素，基本上可以簡稱成ABCDE等5大要素，分別為分析技術(Analytics Technology)、大數據技術(Big Data Technology)、雲或網路技術(Cloud or CyberTechnology)、專業領域知識(Domain Knowledge)，及與證據(Evidence)。",
    },
    {
      content:
        "而其中ABC的部分，是多數業者都可以侃侃而談的部分，但如果要發展工業人工智慧，則專業知識和經驗才是最重要的東西。李傑指出，要從事專業的產業系統，如果沒有專業知識，很難將產業應用上的實際痛點掌握住，也唯有掌握了實際的痛點，才能進一步聚焦在如何解決痛點。",
    },
    {
      content:
        "也因為工業人工智慧的特性，因此，透過工業人工智慧，不僅是可以滿足用戶，解決現階段可見的需求，並給予持續性的改善與訓練；亦可利用新知識，進行加值改善，避免掉即將發生的可見問題；甚至可以透過數據、經驗的累積與分析，以創新的方式與技術，針對不可見的問題進行解決；最終，在利用工業人工智慧的智能訊息，還能進一步避免某些不可見的問題發生，進而創造出新的知識，當然這可能包括了新的產品和新穎的商業模式。",
    },
    {
      content:
        "也唯有透過工業人工智慧的應用，協助業者解決，甚至提前避免不可見的問題發生，整個生產流程，才可能進一步發展到無憂的階段。",
    },
  ],
];

export const financeLabel = [
  [
    {
      title: "人工智慧加入，金融科技新高度",
    },
    {
      author: ["彭文志、黃思皓", "https://scitechvista.nat.gov.tw/c/sTkv.htm"],
    },
    {
      content:
        "圍棋人工智慧AlphaGo在前年（2017）以連三勝的戰績打敗人類棋王， 轟動了整個世界。另一方面，人們也開始思考人工智慧技術在金融界的應用，如何幫助使用者更方便快速地使用服務、減少人力成本？",
    },
    {
      picture: [
        "https://scitechvista.nat.gov.tw/context/image/jpg/48a795e4637f2d0bb8f61d1898db337df1d9a5fed8c12c1fc827fba996edd31c.jpg",
        "隨著科技發展，金融產業公司紛紛借助科技的力量解決其高人力成本的業務，形成一種新興經濟模式。",
      ],
    },
    { contenttitle: "人工智慧發展現況" },
    {
      content:
        "人工智慧（artificial intelligence，簡稱AI）的目標是希望電腦具有類似人類的學習及解決複雜事情的能力，進行較高難度的思考，能夠推理、規劃、交流，甚至是語言對話。目前人工智慧是透過資料的分析，學習潛在的規則，把這些規則建立成一個模型，再利用一些額外的資料進行驗證跟推理，最後透過介面如聊天機器人，或讓機器人以做相對應的動作呈現給使用者。",
    },
    {
      content:
        "而最近炙手可熱的深度學習，則是模擬人類神經系統，稱為類神經網路，就是在電腦裡建構一個很深、很多層的神經元連結，從訊息輸入、逐層傳遞、疊加訊號、產生反應，經由反覆的學習及更新，進而產生最終決策。",
    },
    {
      content:
        "在類神經網路中，神經元間都有一個可改變權重的連結，而每個神經元都會接續著上一層神經元與權重乘積的和，並對下一層神經元傳遞處理過的反應訊號。在訓練模型時，機器學習演算法透過反向傳播算法調整連結的權重，目標是降低目前預測和實際結果之間的差距，即損失函數。",
    },
    {
      content:
        "初步認識AI的架構後，得出一個問題：輸入的資料和目標若需要手工一一標記妥當才能開始訓練，豈不是既費時又費力？",
    },
    {
      content:
        "由於互聯網和行動運算裝置的蓬勃發展，現代人的生活圈幾乎離不開智慧型手機與網路，使用者每次使用網頁服務或社交軟體都會留下大量數位足跡，網站則把這些資料做一步分析使用，這龐大的資料稱為大數據。當能掌握大量有意義的數據時，就可以藉由人工智慧的各項技術從中取得有用的知識。而未來的商業模式會逐漸向這些擁有大數據的公司靠攏，其中包含Google、Facebook、Microsoft、Amazon，與中國的百度、阿里巴巴、騰訊。",
    },
    {
      content:
        "此外，今日許多人工智慧應用陸續開發出來，除了上述深度類神經網路模型的發展與大量數據的累積外，雲端運算及graphics processing units （GPU）的進化也解決了訓練建模所需要的大量運算資源。GPU即圖像處理器，是一個專門在電腦上處理繪圖運算工作的微處理器。GPU之所以能加速訓練模型，關鍵在於它擁有比CPU多且小型的處理器，當模型需要更新權重時，GPU能夠做出大量平行運算，提高比CPU多數十倍的運算效率。",
    },
    { contenttitle: "金融科技，顛覆傳統金融商業模式" },
    {
      content:
        "金融科技（finance technology，簡稱FinTech）是指隨著科技的新興與發展，金融產業公司紛紛採納科技的力量解決其高人力成本的業務，進而形成的一種經濟產業。其中人工智慧在金融業的應用備受關注，本篇將介紹消費行為模式的改變、新興的信用評比方式、智慧的投資保險工具，以及信用卡盜刷偵測，利用人工智慧的技術顛覆傳統的金融商業模式。",
    },
    {
      content:
        "2017年，北歐最大的銀行北歐銀行首席執行官Casper von Koskull表示，因需要降低成本並提升效率，計劃引入AI技術，因而大幅削減員工人數，預計裁員6,000人，其中包括2,000名顧問。金融業的本質就是數字，而擅長處理數字資訊的AI首當其衝進軍金融業一點也不稀奇。小至市面現金交易，大至股市投資買賣，甚至能準確預測股市走勢及風險計算，幾乎全部可以由AI代勞。",
    },
    {
      content: "",
    },
    {
      content: "",
    },
    {
      content: "",
    },
    { contenttitle: "" },
    {
      content: "",
    },
    { contenttitle: "" },
    {
      content: "",
    },
    { contenttitle: "" },
    {
      content: "",
    },
  ],
  [
    {
      title: "",
    },
    {
      author: ["", ""],
    },
    {
      content: "",
    },
    {
      picture: ["", ""],
    },
    { contenttitle: "" },
    {
      content: "",
    },
  ],
  [
    {
      title: "",
    },
    {
      author: ["", ""],
    },
    {
      content: "",
    },
    {
      picture: ["", ""],
    },
    { contenttitle: "" },
    {
      content: "",
    },
  ],
  [
    {
      title: "",
    },
    {
      author: ["", ""],
    },
    {
      content: "",
    },
    {
      picture: ["", ""],
    },
    { contenttitle: "" },
    {
      content: "",
    },
  ],
];

const a = [
  {
    title: "",
  },
  {
    author: ["", ""],
  },
  {
    content: "",
  },
  {
    picture: ["", ""],
  },
  { contenttitle: "" },
  {
    content: "",
  },
];
