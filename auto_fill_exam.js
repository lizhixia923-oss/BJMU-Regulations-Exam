// ============================================
// 北京大学医学部2026级研究生新生校规校纪考试
// 自动填答案脚本 - 浏览器控制台一键运行
// ============================================

const answerData = [{"xh": 1, "tmlx": "1", "correct": ["57cb8ebec609421d842ff97d9a6d7158"], "correctText": ["B"], "correctContent": ["助学"]}, {"xh": 2, "tmlx": "2", "correct": ["f396b3e8e65a407f8eecf533664721bf", "954e6f0418e74b65afd3e2c13d73defb", "adb4c0bbf0ab4371b77ebc81646859d2"], "correctText": ["A", "B", "C"], "correctContent": ["博士研究生校长奖学金", "助研岗位津贴", " 助教岗位津贴"]}, {"xh": 3, "tmlx": "1", "correct": ["3cc40dba6b784fea9ee3dac7e03b0747"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 4, "tmlx": "1", "correct": ["b732718a4cf84f7f97ab64dc0296407d"], "correctText": ["A"], "correctContent": ["暂停"]}, {"xh": 5, "tmlx": "2", "correct": ["ef1fb6fcb527471c8b5dc6984d5997ed", "ae4448423ea2411381eaa90040fa2833", "29b052a465454581ba2d5b93149d4858", "e3174cb0c7d84463b529c0894774e180"], "correctText": ["A", "B", "C", "D"], "correctContent": ["违反校纪处分，且处分未解除者", "学术研究中弄虚作假行为者", "临床医疗工作中有病人投诉、违反所在单位或科室条例及规定者或出现医疗事故者(主要责任)", "在科研工作或实验中造成重大损失者"]}, {"xh": 6, "tmlx": "1", "correct": ["a4441d31f61a49049de523fc3c893f6c"], "correctText": ["B"], "correctContent": [" 1；11"]}, {"xh": 7, "tmlx": "2", "correct": ["76b4ecb73c2144e7bceb6bf4d6a2056f", "da6d0948858e4336b559630f577f0cbc", "0ffc9ac14e054ca1bf17063fce062f6b", "0a9e42ea727f444a8a2314887f5bd4ce", "bbc8849af9f849e89f4f8b5b54ed66bd"], "correctText": ["A", "B", "C", "D", "E"], "correctContent": ["剽窃、抄袭、侵占他人学术成果，篡改他人研究成果。", "伪造科研数据、资料、文献、注释，或者捏造事实、编造虚假研究成果。", "未参加研究或创作而在研究成果、学术论文上署名，未经他人许可而不当使用他人署名，虚构合作者共同署名，或者多人共同完成研究而在成果中未注明他人工作、贡献。", "在申报课题、成果、奖励和职务评审评定、申请学位等过程中提供虚假学术信息。", "买卖论文、由他人代写或者为他人代写论文。"]}, {"xh": 8, "tmlx": "1", "correct": ["f330bacaab994f91abd329111a23c5f8"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 9, "tmlx": "1", "correct": ["4c71002fe2204a28a4222e501108ea15"], "correctText": ["C"], "correctContent": ["记过"]}, {"xh": 10, "tmlx": "2", "correct": ["79eee17d97d74d7595ccc2663e02bd6f", "a315ff5e80e547b19a2d433c8ccbef15", "9abe40eb66c54b38b62c4acb7f2ef573"], "correctText": ["A", "B", "D"], "correctContent": ["伪造学生证等各种证件", "私刻、伪造公章", "伪造各类证明性文件"]}, {"xh": 11, "tmlx": "1", "correct": ["79efa0d7783541abbee7ed3efc5e5333"], "correctText": ["A"], "correctContent": ["警告的处分期为三个月"]}, {"xh": 12, "tmlx": "2", "correct": ["322b2d6661b34017a471c5c95681e144", "39ee4e6bfd00498ca3bc99344d6910d7", "fa78527736104f228ccf00902521e530", "5cb24be2b98a4f219ec17479f29c7485"], "correctText": ["A", "B", "C", "D"], "correctContent": ["造成严重后果的", "在处分调查过程中对有关人员威胁恫吓或打击报复的", "在群体违纪事件中起主要作用的", "在处分期内再次违纪的"]}, {"xh": 13, "tmlx": "1", "correct": ["e1660e4c0f254d55a9ed9e4d2ce4b978"], "correctText": ["B"], "correctContent": ["10日内"]}, {"xh": 14, "tmlx": "1", "correct": ["915e863b555b437490fe2771880ea368"], "correctText": ["A"], "correctContent": ["记过;留校察看"]}, {"xh": 15, "tmlx": "1", "correct": ["49627fba1ca2481db79e1215992a36c0"], "correctText": ["B"], "correctContent": ["警告;严重警告"]}, {"xh": 16, "tmlx": "1", "correct": ["6d51bd5b79de487a9b39dac5eecbd84e"], "correctText": ["C"], "correctContent": ["严重警告"]}, {"xh": 17, "tmlx": "1", "correct": ["d74461cbcc1e45048128f2dc90907598"], "correctText": ["C"], "correctContent": ["严重警告"]}, {"xh": 18, "tmlx": "1", "correct": ["0dfb313ce8df4e3d8cc120c9581802ac"], "correctText": ["B"], "correctContent": ["警告;记过"]}, {"xh": 19, "tmlx": "1", "correct": ["bbe823149d41467fb577483801fc97f8"], "correctText": ["B"], "correctContent": ["警告"]}, {"xh": 20, "tmlx": "1", "correct": ["5a916a99ac98428eb6cd09194819081f"], "correctText": ["C"], "correctContent": ["严重警告;留校察看"]}, {"xh": 21, "tmlx": "2", "correct": ["ab5d50e98ea643fc94b44e137b89087c", "9324c180c47f474fbe75ce3f369b6a72", "ae10e63a19594c58a05511d474ba0c8e", "8dfc5129c75f4a0c97cffd4fb0d6fe0b"], "correctText": ["A", "B", "C", "D"], "correctContent": ["代替考生或由他人代替参加考试的", "组织团伙作弊的", "为作弊组织者提供试题信息、答案及相应设备等参与团伙作弊行为的", "使用通讯设备或其他器材作弊，向他人出售试题或答案牟取利益的"]}, {"xh": 22, "tmlx": "1", "correct": ["3db70e4ccb574578a7f87d579e563089"], "correctText": ["B"], "correctContent": ["警告"]}, {"xh": 23, "tmlx": "1", "correct": ["dd90a8b3d10d4b1e88154f5dceac3dcd"], "correctText": ["C"], "correctContent": ["严重警告"]}, {"xh": 24, "tmlx": "2", "correct": ["de534afca0bd43c7ba3aabcdc4e3f6ff", "3807bead417641819b9fdacfc1a7c504", "2168207efe5442d5906482544d9ce80d", "28958cce6e8e492f86bb15410aba079e", "777cea74462240fdb709948a8a815fee"], "correctText": ["A", "B", "C", "D", "E"], "correctContent": ["警告", "严重警告", "记过", "留校察看", "开除学籍"]}, {"xh": 25, "tmlx": "1", "correct": ["eb4c17ac125a45079600d81c66769e47"], "correctText": ["D"], "correctContent": ["从事或协助从事危害网络安全活动，包括非法侵入他人网络、干扰他人网络正常功能、窃取网络数据等，造成严重后果的，给予警告(含)以上处分"]}, {"xh": 26, "tmlx": "1", "correct": ["368d38b42cf34a94b3dd4bfb1a57b485"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 27, "tmlx": "1", "correct": ["63f9f897b4484956ac3ab718bce1922b"], "correctText": ["B"], "correctContent": ["代替考生或由他人代替参加考试;组织团伙作弊;为作弊组织者提供试题信息、答案及相应设备等参与团伙作弊行为;使用通讯设备或其他器材作弊，向他人出售试题或答案牟取利益;以及其他严重作弊或扰乱考试秩序行为的"]}, {"xh": 28, "tmlx": "2", "correct": ["a8a8984bd3644591932185050c8a4bc3", "23b65f6d2469415d9645f232b33e9db5", "26d2ba72a5ee489b9c4c9b5afef20acd", "bb25a26074ec45e6966045ab063e7014"], "correctText": ["A", "B", "C", "D"], "correctContent": ["传看、传阅、制作、张贴、传播淫秽的文章、书刊、图片、音像等淫秽资料，或非法的文章、书刊、音像等资料的，给予警告或严重警告处分;涉及牟利的，给予记过(含)以上处分", "盗用、冒用、涂改、伪造、变造学生证、校园卡、成绩单或其他证件、证明性文件的，给予记过(含)以上处分", "将本人持有的校内网络资源使用权限转借、转租他人，造成不良影响或严重后果的，给予警告(含)以上处分，涉及牟利的从重处理", "因留宿非本宿舍成员或让其进入宿舍而造成不良影响或严重后果的，给予严重警告(含)以上处分"]}, {"xh": 29, "tmlx": "2", "correct": ["9515253c09104c528214d91447e848a8", "7a4cf566805a4df8be10de828c979b0c", "92575ef64b074ee38a4397aaeafcb2ec", "1b6ee506581049d0be1efab9cc8f04f9"], "correctText": ["A", "B", "C", "D"], "correctContent": ["在重点防火单位或场所使用明火，造成严重后果的", "故意为他人殴打、伤害第三人提供凶器，未造成伤害后果的", "故意损坏文物或古木，故意破坏、损毁校园广播电视、电话、网络等通讯线路或设备的", "在学校进行宗教活动的"]}, {"xh": 30, "tmlx": "1", "correct": ["1438eef6f1b3448da65a62549199a83b"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 31, "tmlx": "1", "correct": ["84357988fcf14ce6af8635a5c491548d"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 32, "tmlx": "1", "correct": ["2edb58d18b3543d3bc7bb4807377592a"], "correctText": ["D"], "correctContent": ["在校期间，未受过行政或党、团组织严重警告以上处分"]}, {"xh": 33, "tmlx": "1", "correct": ["3b3a0d3f97c24c2293e374e87775a9a3"], "correctText": ["D"], "correctContent": ["故意为他人殴打、伤害第三人提供凶器，未造成伤害后果的，给予严重警告(含)以上处分;造成伤害后果的，给予留校察看(含)以上处分"]}, {"xh": 34, "tmlx": "1", "correct": ["23a62155a1fa4e05b74d0834d4808967"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 35, "tmlx": "1", "correct": ["8d4e48979f1044a9b7c916f6da28bea3"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 36, "tmlx": "1", "correct": ["0108c26bd5d44391bc947794949d317d"], "correctText": ["D"], "correctContent": ["未经批准组织成立学生社团并开展活动或发布宣传品，以合法学生社团的名义开展非法活动，或有其他违反学生社团管理规定并造成不良影响的，给予警告处分;情节严重的，给予留校察看(含)以上处分"]}, {"xh": 37, "tmlx": "1", "correct": ["8f9992b1c71645359b41ca730e1c2efe"], "correctText": ["C"], "correctContent": ["发表论文时未如实署名，或发表时未征得合作者同意"]}, {"xh": 38, "tmlx": "2", "correct": ["0cfb5b6300114dbd9d5c3687420f6fdd", "b4eb17535fb24677ae24aeddacb0b16a", "fbe844e0bde0467cab8f22071d117c46", "f253c0decfa042e3a742e8e090664ae9"], "correctText": ["A", "B", "C", "D"], "correctContent": ["组织团伙作弊", "由他人替考", " 替他人参加考试", "使用通讯设备作弊"]}, {"xh": 39, "tmlx": "2", "correct": ["17f39bee0b0445b78dc0d56659d6c64a", "c822b018fc4848f69a7c9cc954bd4d7d", "dee3895da62d4a23905548724586f0c1", "670fdbd8a51c431da3e4ca14fdce1d65"], "correctText": ["A", "B", "C", "D"], "correctContent": ["涂改伪造成绩单", "违反公寓楼内消防及其他安全规定，经批评教育不改的并造成严重后果的", "明知自身患有传染病却隐瞒病情、拒不接受治疗或防治措施并造成不良后果的", "伪造各类获奖证书、证明、毕业证等有关证件、证明文件"]}, {"xh": 40, "tmlx": "1", "correct": ["c264c47337d24a6184467ae665f51926"], "correctText": ["D"], "correctContent": ["有卖淫、嫖娼等行为的，给予记过处分"]}, {"xh": 41, "tmlx": "2", "correct": ["ecb1438660e34a198fe6e2f250f4bda3", "358d4763438c4d7495c22a9c124d6c83", "d0431df455af494ca34198a13b1da683"], "correctText": ["A", "C", "D"], "correctContent": ["违反宪法、反对四项基本原则、破坏安定团结、扰乱社会秩序的，给予留校察看或开除学籍处分", " 受到刑事处罚的，给予留校察看或开除学籍处分", " 受到治安管理处罚的，给予记过、留校察看或开除学籍处分"]}, {"xh": 42, "tmlx": "1", "correct": ["4d9613415a1a4663a5df9d95228b36ad"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 43, "tmlx": "1", "correct": ["8d5e264839b6468db12cc73487387c05"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 44, "tmlx": "1", "correct": ["8d4cfb5a2ba941039c4c5698dbe314d0"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 45, "tmlx": "1", "correct": ["6124bb3dd1474ecbb5d366bd5a6ceb61"], "correctText": ["A"], "correctContent": ["记过;留校察看"]}, {"xh": 46, "tmlx": "1", "correct": ["1dd7196538b540679d6602470bfd6cb0"], "correctText": ["B"], "correctContent": ["两周"]}, {"xh": 47, "tmlx": "1", "correct": ["295f030b73aa41b88d0e8861b39e6107"], "correctText": ["A"], "correctContent": ["一周"]}, {"xh": 48, "tmlx": "1", "correct": ["a96cd3744aa745389479f58d85c4ccbb"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 49, "tmlx": "1", "correct": ["da7c27e6c59c461a94116b81360af967"], "correctText": ["D"], "correctContent": ["导师，学院主管负责人"]}, {"xh": 50, "tmlx": "1", "correct": ["805f3167f034412f896a5f59322eeb29"], "correctText": ["C"], "correctContent": ["一个月"]}, {"xh": 51, "tmlx": "1", "correct": ["307fafe9eb7e4442b4f82d867c1fb10f"], "correctText": ["C"], "correctContent": ["一学年"]}, {"xh": 52, "tmlx": "2", "correct": ["cc428eed842547939a55d7541da1538d", "7f594c416ee24fd1b02e9fd0fd49c6fd", "41313ed13880496fb5014afb2211e748", "8aeace2a52734a80ba96b14f66dac7f5"], "correctText": ["A", "B", "C", "D"], "correctContent": ["在校生逾期2周未注册又未履行暂缓注册手续的", "经北京大学医学部指定医院诊断，患有疾病或意外伤残难以坚持学习，一年内不能治愈者", "休学或保留学籍期满，因身体复查不合格、虚假创业经历或因其他原因不能复学者", "在一学期内请假累计超过一个月以上而又未办理休学手续者"]}, {"xh": 53, "tmlx": "1", "correct": ["43552c8ab0154b57bc95a40170ad46c7"], "correctText": ["C"], "correctContent": ["医学部学生申诉处理委员会"]}, {"xh": 54, "tmlx": "1", "correct": ["e3caccf2e44947b5bada5453cb7bd31d"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 55, "tmlx": "2", "correct": ["faae122bdd554c2393278bdfcba139eb", "2f0b1d45f10948e28bc06af4cac58aa4", "485f51130b9241f4be1be68e7b5c732e"], "correctText": ["A", "B", "C"], "correctContent": ["身心健康检查发现患有疾病短期可治愈，暂不宜在校学习者", "因病请假一个月期满，仍未痊愈不能报到者", "已怀孕，或于入学前分娩，从报到之日起仍需休产假一个月以上者"]}, {"xh": 56, "tmlx": "1", "correct": ["a291487e5fca4cb5b4481da317e4c268"], "correctText": ["A"], "correctContent": ["5年；8年"]}, {"xh": 57, "tmlx": "1", "correct": ["bbf5942e6248495692e4f502085edca3"], "correctText": ["B"], "correctContent": ["否"]}, {"xh": 58, "tmlx": "1", "correct": ["bca53c1552a14495b7868a9fb566b817"], "correctText": ["A"], "correctContent": ["是"]}, {"xh": 59, "tmlx": "1", "correct": ["7e7a4227eb4c44e18b0ea2bdf02b9780"], "correctText": ["B"], "correctContent": ["否"]}, {"xh": 60, "tmlx": "2", "correct": ["6fbc2953f8c64332a31a9a84cfc9ee97", "f6b19ea5bb6f4ba888ba49d0e63778b3", "191c0ce28412424a8ae644754cf15be6", "30a05c927abe44b1aaa038ac9ace2a08"], "correctText": ["A", "B", "C", "D"], "correctContent": ["录取手续及程序等是否合乎国家招生规定", "所获得的录取资格是否真实、合乎相关规定", "本人及身份证明与录取通知、考生档案等是否一致", "身心健康状况是否符合报考专业或者专业类别体检要求，能否保证在校正常学习、生活"]}, {"xh": 61, "tmlx": "2", "correct": ["4d2299541bed405eacf0b21d1143d5c2", "2d5716d7f61145a288eb5154ca8b2462", "1668921acd60421297a8c3fa4ec15cb4"], "correctText": ["B", "C", "D"], "correctContent": ["取消学籍", "情节严重的移交有关部门调查处理", "保留入学资格"]}, {"xh": 62, "tmlx": "2", "correct": ["ca92677cf678435481ba3856913f6a46", "cae79c0220364430a12adf10d762752b", "e38a4f1347b0419d96ba288322b2c589"], "correctText": ["A", "B", "C"], "correctContent": ["临床医学、口腔医学、护理学攻读学术学位的研究生拟转为攻读专业学位者", "以特殊招生形式录取的研究生，国家有相关规定或者录取前与学校有明确约定的", "研究生入学未满一学期或者毕业前一年"]}, {"xh": 63, "tmlx": "2", "correct": ["3907475b54624bdba5945de17e7256db", "f8460291b8c14f70abaebc446a0c4d9a", "900408bfda4d4cf38b660e3de82d36b2", "1a967bcbf0fa4cab8c38d370fc10a8e2"], "correctText": ["A", "B", "C", "D"], "correctContent": ["因健康原因不宜在校学习，经北京大学医学部医院诊断，证明确需休养并在短期内可以治愈者", "一学期请假累计超过一个月以上者", "已怀孕，或于学期前分娩、从注册之日起仍需休产假一个月以上者", "研究生为增加专业实践经验、创业需要暂停学业的"]}, {"xh": 64, "tmlx": "1", "correct": ["1a32d7c726c94cc0871325406bf441fb"], "correctText": ["B"], "correctContent": ["2年"]}, {"xh": 65, "tmlx": "1", "correct": ["d7b0d23d5522474f84968aaafa7d2cef"], "correctText": ["A"], "correctContent": ["1，1"]}, {"xh": 66, "tmlx": "2", "correct": ["f3a53dab37454cdc8f1ac328f7bf1716", "db04dbb9bae249328692e1cd89a7ae53", "32a14725ed3747d7a985c32188ca942a"], "correctText": ["A", "B", "C"], "correctContent": ["直博生在完成课程学习，修完培养方案规定的学分后，博士生资格考试成绩不合格，补考仍不合格者", "通过校内转博入学的临床/口腔医学博士专业学位研究生，博士临床能力毕业考核不合格，补考仍不合格者", "直博生和硕博连读生，确因身体、能力等客观原因，在本专业硕士基本学习年限过后无法继续完成学业的"]}, {"xh": 67, "tmlx": "1", "correct": ["8581ea19e19149159dcbd7bd8952621b"], "correctText": ["A"], "correctContent": ["1年，2年"]}, {"xh": 68, "tmlx": "1", "correct": ["0a96432332f5485f864321e3ea0385df"], "correctText": ["A"], "correctContent": ["是"]}, {"xh": 69, "tmlx": "2", "correct": ["cb9d17d05188479f84c4971bfbc97e8e", "e170ea278ac44ba8a63e420d4e9363f8", "fec62bcdc4bc41ba95d22ffd390a3d73", "45e15b15a8ee4578bf2611db32bc424b"], "correctText": ["A", "B", "C", "D"], "correctContent": ["未经请假或请假未获批准而不参加培养计划规定的教学或科研活动", "未经请假或请假未获批准而擅自离校者(含未办理审批程序出国、出境)", "未请假或请假未获批准而不按期注册者", "请假期满未续假，或续假未获批准而逾期不归者"]}, {"xh": 70, "tmlx": "2", "correct": ["80bccf250cc544168bc73667a9d5275b", "6046dd1c7a734b5e94a0c4b5bf3e4352", "eb8b4584aab94b1a8ff9f828e6f4e22f", "52fc333fe23d45ad90669b3f16c17106"], "correctText": ["A", "B", "C", "D"], "correctContent": ["使用手机", "使用非教师允许的计算器", "使用具有信息发送、接收、存储功能的设备（如电子手表、手环、耳机等）", "携带具有信息发送、接收、存储功能的设备（如电子手表、手环、耳机等）"]}, {"xh": 71, "tmlx": "1", "correct": ["58fd3739a8a64bba8070ae0f65e99dd1"], "correctText": ["A"], "correctContent": ["记过;记过"]}, {"xh": 72, "tmlx": "1", "correct": ["09d03799c7674eb8aac149451a618e4c"], "correctText": ["B"], "correctContent": ["三"]}, {"xh": 73, "tmlx": "1", "correct": ["de138ef56b9c483cb5ac10bf1c6cea16"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 74, "tmlx": "2", "correct": ["022ec019f97148a7b3fe0d20606b8693", "d2469926ae5944b8938d64972e6d5d98", "d9bd0368661e4ddc96a6530c436506f7", "720fa222469a41249c6ec309a0d03f41"], "correctText": ["A", "B", "C", "D"], "correctContent": ["旷课10-19学时，给予警告处分", "旷课20-29学时，给予严重警告处分", "旷课30-39学时，给予记过处分", "旷课40学时(含)以上，给予留校察看处分"]}, {"xh": 75, "tmlx": "1", "correct": ["d7d6b91f13e84103a02a5f6678cbabaf"], "correctText": ["B"], "correctContent": ["错误"]}, {"xh": 76, "tmlx": "1", "correct": ["6169be04fa63441ebcaedcf3b0475b29"], "correctText": ["A"], "correctContent": ["15;30"]}, {"xh": 77, "tmlx": "1", "correct": ["9d70eddf75114f3486597a36341ec317"], "correctText": ["C"], "correctContent": [" 1/3"]}, {"xh": 78, "tmlx": "2", "correct": ["4a95a8afc77e414788859dabac73c142", "6cd80d25520844a0b17ba426789ff38e"], "correctText": ["A", "C"], "correctContent": ["业务考核成绩不合格，经补考仍不合格者", "业务考核成绩不合格，不参加补考者"]}, {"xh": 79, "tmlx": "1", "correct": ["8879f79f6d814a2f842dd5283cc26e48"], "correctText": ["B"], "correctContent": ["6~12，24，3"]}, {"xh": 80, "tmlx": "1", "correct": ["70b7be695332459e8448499f82391308"], "correctText": ["A"], "correctContent": ["旷课"]}, {"xh": 81, "tmlx": "2", "correct": ["6039a64316de476bac2cc268228b1a50", "1a3c28163d144a03861bd992245de35d", "84aac62862cf4bc6ad0eeeb68e155a50", "ff567febcab142f8817b62aa90b51df8", "b0fc55f710454a28a0e9fb4096882660", "a67e5d970d45415e9f40138456dc9ae6"], "correctText": ["A", "B", "C", "D", "E", "F"], "correctContent": ["截至第四学期末修满硕士阶段培养方案中规定的全部学分", "硕士阶段课程学习无不合格成绩", "第二学年内一次性通过国家医师资格考试", "临床能力训练出科考核无不合格成绩", "在学校组织的阶段考核中成绩优秀", "在住院医师规范化培训结业考核成绩一次性合格"]}, {"xh": 82, "tmlx": "1", "correct": ["bc03fa966b234881b65a673802e6a333"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 83, "tmlx": "2", "correct": ["580c8c20b69e4686be2dbb4f6f3be7ee", "0f531030e308481cbca66d21e5ad5929", "6318d8ac9b1547dbbdcf2b9339eda0dc", "4f56a9d60f364a62afa2200e22904eaf", "7878d2859a6b468781915ad29d9a0f3d"], "correctText": ["A", "B", "C", "D", "E"], "correctContent": ["获得培养方案所要求的课程学分", "完成临床/口腔医学硕士专业学位临床能力训练要求", "取得《执业医师资格证书》", "取得《住院医师规范化培训合格证书》", "通过硕士学位论文答辩"]}, {"xh": 84, "tmlx": "1", "correct": ["6105d33b74d54744a86502a7a9d87c88"], "correctText": ["B"], "correctContent": ["24;12"]}, {"xh": 85, "tmlx": "1", "correct": ["256e4fc4738a4f82842dee3d953f9e18"], "correctText": ["C"], "correctContent": ["北京大学医学部专科医师规范化培训结业/中期考核"]}, {"xh": 86, "tmlx": "1", "correct": ["d7d655c3b2cc4ee7b7715dbfaf2460f1"], "correctText": ["D"], "correctContent": ["双盲制"]}, {"xh": 87, "tmlx": "1", "correct": ["8aecc0cd9b6c4d1fa2a5d344ff31e6d0"], "correctText": ["A"], "correctContent": ["三"]}, {"xh": 88, "tmlx": "1", "correct": ["72ec7ec0159840a2a3e1ed6ea2f06d06"], "correctText": ["B"], "correctContent": ["五"]}, {"xh": 89, "tmlx": "1", "correct": ["8b346cc238bf4c02949819405a8c41f1"], "correctText": ["C"], "correctContent": ["三分之二"]}, {"xh": 90, "tmlx": "1", "correct": ["c6dfec13b7fc4957a0b5330618bcbbf5"], "correctText": ["A"], "correctContent": ["一"]}, {"xh": 91, "tmlx": "1", "correct": ["a621d172bbef42099cee71b537cd24f4"], "correctText": ["B"], "correctContent": [" 两"]}, {"xh": 92, "tmlx": "1", "correct": ["bb099776f34d46bbb5780685f8d39279"], "correctText": ["C"], "correctContent": ["处分期满解除处分后"]}, {"xh": 93, "tmlx": "1", "correct": ["64337d3a051a498b9c41917e63eddfb9"], "correctText": ["D"], "correctContent": [")以上均是"]}, {"xh": 94, "tmlx": "1", "correct": ["5e82813a0b2548fd80ebe34a59194928"], "correctText": ["A"], "correctContent": ["82801110"]}, {"xh": 95, "tmlx": "1", "correct": ["0255f543850c4b779a0ec2c4fd694cd7"], "correctText": ["D"], "correctContent": ["经过公寓管理部门批准以后调整宿舍"]}, {"xh": 96, "tmlx": "1", "correct": ["3136babf90a04eb1959084a08d8770d1"], "correctText": ["D"], "correctContent": ["生活日用品"]}, {"xh": 97, "tmlx": "1", "correct": ["904b855310ac419a951f48af9f1b0735"], "correctText": ["D"], "correctContent": ["在房间内原配套电插座上插电使用合规电器"]}, {"xh": 98, "tmlx": "1", "correct": ["ed9ec8a8bba94e0db7e0a7ca1e1217c8"], "correctText": ["A"], "correctContent": ["严重警告、留校察看"]}, {"xh": 99, "tmlx": "1", "correct": ["8d3b3eee1722457fbf1cc7e568bd9161"], "correctText": ["A"], "correctContent": ["正确"]}, {"xh": 100, "tmlx": "1", "correct": ["ca59a7f62af04acf82382760cc997e93"], "correctText": ["A"], "correctContent": ["正确"]}];

(function() {
    console.clear();
    console.log("🚀 开始自动填写答案...");

    let success = 0, fail = 0, skipped = 0;
    const failedQuestions = [];

    // 策略1：通过 input[value] 精确匹配 XXDM
    function strategyValueMatch(q) {
        let found = false;
        q.correct.forEach((xxdm, idx) => {
            const input = document.querySelector(`input[type="${q.tmlx === '1' ? 'radio' : 'checkbox'}"][value="${xxdm}"]`);
            if (input && !input.checked) {
                input.click();
                found = true;
                console.log(`  ✅ 题号${q.xh} 选中: ${q.correctText[idx]} - ${q.correctContent[idx].substring(0,20)}`);
            } else if (input && input.checked) {
                found = true; // 已经选中了
            }
        });
        return found;
    }

    // 策略2：通过选项文本模糊匹配（遍历所有label和选项div）
    function strategyTextMatch(q) {
        let found = false;
        const allLabels = document.querySelectorAll('label, .option, .xx-item, .answer-item, [class*="option"], [class*="answer"], [class*="xx"]');

        q.correctContent.forEach((text, idx) => {
            if (!text) return;
            const cleanText = text.trim().replace(/\s+/g, '');

            for (const el of allLabels) {
                const elText = (el.textContent || el.innerText || '').trim().replace(/\s+/g, '');
                if (elText.includes(cleanText) || cleanText.includes(elText)) {
                    const input = el.querySelector('input[type="radio"], input[type="checkbox"]') 
                                || el.previousElementSibling 
                                || el.nextElementSibling;
                    if (input && input.tagName === 'INPUT') {
                        if (!input.checked) input.click();
                        found = true;
                        console.log(`  ✅ 题号${q.xh} 文本匹配选中: ${q.correctText[idx]}`);
                        break;
                    }
                }
            }
        });
        return found;
    }

    // 策略3：通过选项字母 A/B/C/D 匹配（适用于选项结构为 label包裹input的情况）
    function strategyLetterMatch(q) {
        let found = false;
        const inputs = document.querySelectorAll(`input[type="${q.tmlx === '1' ? 'radio' : 'checkbox'}"]`);

        q.correctText.forEach((letter, idx) => {
            for (const input of inputs) {
                const parent = input.parentElement;
                if (!parent) continue;
                const parentText = (parent.textContent || '').trim();
                // 匹配 "A.", "A、", "A " 等格式
                const regex = new RegExp(`^${letter}[\.、\s:：]`);
                if (regex.test(parentText)) {
                    if (!input.checked) input.click();
                    found = true;
                    console.log(`  ✅ 题号${q.xh} 字母匹配选中: ${letter}`);
                    break;
                }
            }
        });
        return found;
    }

    // 逐题填写
    answerData.forEach(q => {
        if (q.correct.length === 0) {
            console.log(`  ⚠️ 题号${q.xh} 无正确答案数据，跳过`);
            skipped++;
            return;
        }

        let done = strategyValueMatch(q);
        if (!done) done = strategyTextMatch(q);
        if (!done) done = strategyLetterMatch(q);

        if (done) {
            success++;
        } else {
            fail++;
            failedQuestions.push(q.xh);
            console.log(`  ❌ 题号${q.xh} 填写失败，请手动检查 (答案: ${q.correctText.join(',')})`);
        }
    });

    // 统计输出
    console.log("\n========================================");
    console.log(`📊 填写完成统计：`);
    console.log(`   成功: ${success} 题`);
    console.log(`   失败: ${fail} 题`);
    console.log(`   跳过: ${skipped} 题`);
    if (fail > 0) {
        console.log(`   失败题号: ${failedQuestions.join(', ')}`);
    }
    console.log("========================================");

    // 如果页面有自动保存/提交按钮，提示用户
    const submitBtn = document.querySelector('button[type="submit"], .submit, .btn-submit, [class*="submit"], [class*="save"]');
    if (submitBtn) {
        console.log(`\n💡 检测到提交/保存按钮: "${submitBtn.textContent.trim()}"`);
        console.log("   请检查答案无误后手动点击提交。");
    }
})();
