import './App.css';
import React from 'react';
import menu_icon from './img/menu.png';
import logo from './img/logo.png'
import logo_text from './img/logo_text.png';
import Gnb from './components/gnb';
import Definition from './components/definition';
import Test from './components/test';
import Result from './components/Result';
import Wait from './components/Wait';

function App() {

	// Questions
    const questions = [
        [['열정적인', 'I', 'I'], ['대담한', 'D', 'D'], ['치밀한', 'C', 'C'], ['만족해하는', 'S', 'S']],
        [['신중한', 'C', 'C'], ['결단력 있는', 'D', 'D'], ['확신을 주는', 'I', 'I'], ['호의적인', 'S', 'N']],
        [['다정한', 'I', 'N'], ['정확한', 'C', 'C'], ['솔직하게 말하는', 'D', 'D'], ['변화가 적은', 'N', 'S']],
        [['말하기 좋아하는', 'I', 'I'], ['자제력있는', 'C', 'C'], ['관습을 따르는', 'S', 'S'], ['결단력 있는', 'D', 'D']],
        [['도전하는', 'D', 'D'], ['통찰력있는', 'C', 'C'], ['사교적인', 'I', 'I'], ['온건한', 'S', 'S']],
        [['온화한', 'S', 'S'], ['설득력있는', 'I', 'N'], ['겸손한', 'N', 'C'], ['독창적 아이디어 내는', 'N', 'D']],
        [['표현력있는', 'I', 'I'], ['조심성있는', 'C', 'C'], ['주도적인', 'D', 'D'], ['민감히 반응하는', 'N', 'S']],
        [['호의적인', 'I', 'I'], ['세심한', 'C', 'N'], ['겸손한', 'S', 'S'], ['참을성이 적은', 'D', 'D']],
        [['사려깊은', 'C', 'C'], ['남 의견에 잘 동의하는', 'S', 'S'], ['매력적인', 'I', 'I'], ['확고한', 'D', 'D']],
        [['용감한', 'D', 'D'], ['격려하는', 'I', 'I'], ['순응하는', 'S', 'S'], ['수줍어하는', 'N', 'C']],
        [['내성적인', 'C', 'C'], ['호의적인', 'S', 'S'], ['의지가 강한', 'D', 'D'], ['명량한', 'I', 'I']],
        [['남을 격려하는', 'I', 'I'], ['친절한', 'S', 'S'], ['주의깊은', 'C', 'C'], ['독림심 강한', 'D', 'D']],
        [['경쟁심있는', 'D', 'D'], ['생각이 깊은', 'S', 'S'], ['활발한', 'I', 'I'], ['자신을 잘 드러내지 않는', 'C', 'C']],
        [['세밀한', 'C', 'C'], ['유순한', 'S', 'S'], ['완고한', 'D', 'D'], ['놀기 좋아하는', 'I', 'I']],
        [['사람에게 호감을 주는', 'I', 'I'], ['생각이 깊은', 'C', 'N'], ['의지가 굳은', 'D', 'D'], ['일관되게 행동하는', 'S', 'S']],
        [['논리적인', 'C', 'C'], ['과감한', 'D', 'D'], ['충실한', 'S', 'S'], ['인기있는', 'I', 'I']],
        [['사교적인', 'I', 'I'], ['참을성있는', 'S', 'S'], ['자신감있는', 'D', 'D'], ['말씨가 부드러운', 'C', 'C']],
        [['의존적인', 'S', 'S'], ['의욕적인', 'D', 'N'], ['철저한', 'C', 'C'], ['활기있는', 'I', 'I']],
        [['의욕적인', 'D', 'D'], ['외향적인', 'I', 'I'], ['친근한', 'S', 'S'], ['갈등을 피하는', 'N', 'C']],
        [['유머가 있는', 'I', 'I'], ['이해심있는', 'S', 'S'], ['공평한', 'N', 'C'], ['단호한', 'D', 'D']],
        [['자제력있는', 'C', 'C'], ['관대한', 'S', 'S'], ['활기있는', 'I', 'I'], ['고집스런', 'D', 'D']],
        [['재치있는', 'I', 'I'], ['내향적인', 'C', 'C'], ['강인한', 'D', 'D'], ['쉽게 화내지않는', 'S', 'S']],
        [['남과 잘 어울리는', 'I', 'I'], ['점잖은', 'C', 'C'], ['활기찬', 'D', 'D'], ['너그러운', 'S', 'S']],
        [['매력있는', 'I', 'I'], ['흡족해하는', 'S', 'S'], ['지시하는', 'D', 'D'], ['양보하는', 'C', 'C']],
        [['자기주장을 하는', 'D', 'D'], ['체계적인', 'C', 'C'], ['협력적인', 'S', 'S'], ['즐거운', 'I', 'I']],
        [['유쾌한', 'I', 'I'], ['정교한', 'C', 'C'], ['결과를 요구하는', 'D', 'D'], ['침착한', 'S', 'S']],
        [['변화를 추구하는', 'D', 'D'], ['우호적인', 'S', 'S'], ['호소력있는', 'I', 'I'], ['꼼꼼한', 'C', 'C']],
        [['공손한', 'C', 'C'], ['새롭게 시작하는', 'D', 'D'], ['낙천적인', 'I', 'I'], ['도움을 주려하는', 'S', 'S']]
    ];

	const behaviorType = {
		"D" : [
			"타고난 리더. 주도적으로 듣고 말하며 성취 욕구를 통해 성장하는 자. 도전 정신을 통해 권위와 권력을 쟁취하는 자.",
			"주도형(Dominance)를 강점으로 지닌 사람들은 주도적이면서 성취욕구가 높습니다. 삶의 페이스가 빠른 편에 속하며, 이러한 성향 때문에 의사소통 상황에서 빠르고 간단명료하게 말하는 특성이 있습니다. 지금 당장 해야하는 것에 집중하기에 생각보다 몸이 먼저 나가는 경향을 보이며, 듣는 상황에서 답답함을 느끼면 개입하여 상황 및 내용을 정리해주곤 합니다. 업무 상황에 놓일 땐 '그래서 나는 뭐 해?' 와 같은 말을 외우며 자신이 할 일을 찾아 나섭니다.",
			"업무에 대한 본인의 결정권이 극대화되는 환경을 선호합니다. 업무 과정보단 결과를 지향하고, 빠른 결과를 보기 위해 속도내어 업무를 봅니다. 또한 결과에 대한 보상을 중요시하기 때문에 직장을 고를 때 워라벨보단 연봉 그 자체에 대한 중요도를 더욱 높게 평가합니다. 반대로 통제권이 없거나 타인의 감독을 받는 환경을 회피하고자 합니다. 또한 본인에 대한 평가가 부드럽가나 약하다는 인식이 드는 것을 싫어합니다. 반복적이고 예측이 가능한 업무를 보는 환경을 꺼려합니다.",
		],
		"I" : [
			"타고난 공감능력. 자신의 생각과 감정을 타인과 공유하며, 타인의 반응에 따라 행동 경향이 극과 극으로 변하는 자. 밝고 활기차며 긍정적인 면모를 지닌 자.",
			"사교형(Influence)을 강점으로 지닌 사람들은 활기차고 에너지 넘치는 행동 경향을 보입니다. 의사소통 상황에서 듣기보단 말하는 편에 속하며, 감정적이고 공감능력이 높아 타인과 잘 동조되고 금새 친해지곤 합니다. 그렇다고 무조건적인 친화력을 보이지는 않습니다. 그게 일이 되었건, 사람이 되어건, 관계가 되었건 흥미가 없다면 먼저 말을 하지도 공감능력을 보이지도 않습니다. 이들에게 중요한 건 '흥미' 입니다.",
			"업무 환경에서 그 무엇보다 동료를 중요시하게 여깁니다. 동료와의 관계가 불편한 상황 속에서 최악의 업무 성과를 보입니다. 보상이 높을지언정 동료가 좋지 않은 상황이라면 고민하지 않고 이직을 결심합니다. 가시적으로 인정을 주고받는 환경을 선호하며, 그 과정에서 더 많은 인정과 인기를 위해 업무 능력을 극대화 시키는 경향을 보입니다."
		],
		"S" : [
			"타고난 계획주의자. 안정적인 상황을 선호하고 평화로움을 추구하는 자. 돌발상황에서 발생하는 스트레스를 피하고자 계획을 추구하는 자.",
			"안정성(Steadiness)를 강점으로 지닌 사람들은 신중하며 계획적인 행동 경향을 보입니다. 예상하지 않은 돌발상황이 발생하는 것을 좋아하지 않기 때문입니다. 거의 존재하는 모든 상황이 닥치는 순간 머리 속으로 계획을 구상하기 시작하며, 심지어 의사소통 상황에서 조차 어떤 말을 하기 위해 과정을 빌드업하곤 합니다. 갑작스러운 논쟁 상황에서 말을 잘 하는 편이 아닙니다. 되려 논쟁이 끝난 뒤에야 어떻게 말을 했어야 했는지 상상하며 자책하는 편입니다.",
			"일정한 틀이 명확한 업무 환경을 선호합니다. 계획을 세우고 과정을 따라가며 결과를 보는 구조를 늘 지키며, 따라서 보고서 작성 등의 서류 업무를 막힘없이 잘 해냅니다. 대학생의 경우 조별과제에서 계획을 제시하는 중요한 역할을 수행하곤 합니다. 조직적이지 못하고 어수선한 분위기의 업무 환경에 스트레스를 받으며, 맡은 역할을 제대로 소화하지 못해 계획에 차질을 주는 팀원의 존재에도 스트레스를 받습니다."
		],
		"C" : [
			"타고난 신중함. 규칙 및 규범을 준수하고 정확한 정보 파악에 힘쓰는 자. 실수하지 않고자 자신에게 또한 엄격한 잣대를 요구하는 자.",
			"신중성(Compliance)을 강점으로 지닌 사람들은 틀리지 않은 정확한 정보를 파악하고자 하는 행동 경향을 보입니다. 잘못된 정보로 인해 실수하거나 납득되지 않는 상황이 발생하는 것에 스트레스를 받기 때문입니다. 때문에 어떠한 주장에 대해 과학적이나 수치적인 근거가 제시되지 않으면 절대로 쉽게 납득하지 않습니다. 반대로 명확한 근거로 주장을 제시할 경우, 친분이 없는 경우에도 불구하고 높은 신뢰를 주는 경향이 있습니다.",
			"정보의 정확성이 보장되는 업무 환경을 선호합니다. 사고의 추리 및 과정을 논리적으로 맞춰나가기 때문에 전형적인 이과 감성을 보입니다. 논쟁 또는 비판적 상황에 놓일 경우 상대방의 주장에 일리가 있다고 판단하면 본인의 생각을 타협하는 편입니다. 즉 단체 상황에서 가장 토론다운 토론을 잘 이뤄내는 행동 경향을 가지고 있습니다. 감정적인 공감을 잘 하지 못하는 성향이라 일부 사람들을 이해하지 못하곤 합니다."
		],

		"결과지향자" : [
			"결과지향자는 빠른 변화를 추구하고 트렌드를 선호하며 답답함 상황을 회피하고자 먼저 나서서 상황을 정리하고 리드하는 경향을 보입니다.",
			"결과지향자는 주도형(Dominance)의 강점에서 사람과의 관계를 중요시하는 사고가 더해진 성향을 가집니다. 따라서 외향적이고 에너지가 많으며 적극적인 행동 경향을 보입니다.",
			"결과지향자는 굉잫이 급한 성격의 소유자로 매우 급한 행동 경향을 보입니다. 타인이 무언가 과정을 차근차근 설명하는 상황이 닥친다면 결과지향지는 이 상황을 굉장히 지루해하고 답답해합니다.",
			"결과지향자는 타인에게 무신경하다는 인상을 남깁니다. 업무를 상의 없이 독자적으로 처리하며, 타인의 조언을 한 귀로 흘릴 때가 종종 있기 떄문입니다. 하지만 타인의 진심어린 충고를 들을 때면 굉장히 고마워하곤 합니다. 패션, 광고, 뷰티, 크리에이터와 같은 이미지를 가지고 있습니다."
		],

		"성취자" : [
			"성취자는 기준없는 변화에 큰 스트레스를 받으며 그 무엇보다 자신의 소속된 팀의 의견을 중요시합니다. 소속을 위해 자신을 희생하는 경향을 보입니다.",
			"성취자는 주도형(Dominance)의 강점에서 안정적이고 싶어하는 사고가 더해진 성향을 가집니다. 따라서 새로운 조직에 가담할 때 변화된 환경에 매우 빠르게 적응되는 모습을 보이곤 하며, 불확실한 상황에 대한 걱정을 많이 하는 경향을 보입니다.",
			"성취자는 주도적이고 성취욕구가 강하지만, 안정적이고 조직적인 것을 선호하기 때문에 몸과 마음이 달라 스트레스를 받곤 합니다. 행동으로 빠르게 해결하고 싶은 마음과 걱정스러운 마음이 충돌하여 몸이 앞서진 않지만 생각이 많아 혼자 갈등하곤 합니다.",
			"성취자는 목표와 순서가 정해지지 않은 업무를 싫어합니다. 하나의 업무를 나눠 중구난방식으로 진행될바에 차라리 본인 스스로 다 하고 말겠다며 희생하는 행동 경향을 보입니다. 프로젝트를 관리하는 팀장 또는 부장님과 같은 이미지를 가지고 있습니다."
		],

		"개척가" : [
			"개척가는 업무중심의 사고를 바탕으로 효율과 원리원칙을 중요시하며 명확한 근거로 똑부러지는 행동 경향을 보입니다.",
			"개척가는 주도형(Dominance)의 강점에 신중하고 원리원칙을 중요시하는 사고가 더해진 성향을 가집니다. 따라서 논리적이고 과학적이어야하며, 무엇이든 납득이 되어야만 하고, 그렇지 못할 경우 비판적인 행동 경향을 보입니다.",
			"개척가는 타인에게 겉모습과 말투가 굉장히 차갑다는 인상을 남깁니다. 이는 타인에게 냉정한 행동을 보인다는 의미이기도 하지만, 반대로 말하자면 뒤끝이 없고 시원시원하게 행동한다는 의미이기도 합니다. 때문에 어느정도 대화를 나눠본 상대는 당신을 '카리스마있고 멋지다' 라고 표현하기도 합니다.",
			"개척가는 굉장히 강력한 승부욕을 지니고 있습니다. 따라서 업무중심적이며 워커홀릭 경향을 보이기도 합니다. 목표 달성을 중요하게 여기며 보상이 확실한 경우 업무를 더욱 잘 해내는 편입니다. 대중적인 강사 또는 사업가, CEO, 전문가 기질을 타고난 마이스터와 같은 이미지를 가지고 있습니다."
		],

		"정치가" : [
			"정치가는 신중하고 체계적이며, 논리적이고 객관적인 성향으로 완벽주의자와 같은 행동 경향을 보입니다.", 
			"정치가는 사교형(Influence)의 강점에 적극적이고 열정적인 사고가 더해진 성향을 가집니다. 따라서 사교형(Influence)의 패턴 중 가장 외향적이며, 가능한 모든 상황에 최선을 다하는 행동 경향을 보입니다.", 
			"정치가는 굉장히 다양한 감정표현을 가지고 있습니다. 때문에 타인에게 정치가는 감정기복이 파도 같다는 인상을 남깁니다. 하지만 이는 좋고 싫음이 분명하고 표현이 큼직하여 발생하는 오해에 불과합니다. 표현이 확실한 만큼 추구하는 이상도 확실한 편이라 흥미가 더해진 목표에 누구보다 꼼꼼히 다가갑니다.", 
			"정치가는 목표 그 이상으로 한계를 뛰어넘고자 하는 행동경향을 보입니다. 이를 위해 누구보다 적극적으로 움직입니다. 다만 흡족한 결과나 나오지 않으면 본인을 크게 자책하기 때문에 다른 누구보다 번아웃을 빠르게 겪어 우울증을 심히 앓는 경향이 있습니다. 따라서 가까운 사람의 칭찬과 격려가 가득한 업무 환경을 선호합니다. 정치인, 사업가, CEO처럼 완벽함을 추구하는 이미지를 가지고 있습니다."
		],

		"헌신자" : [
			"헌신자는 헌신적이고 평화를 추구하는 성향으로 타인 대신 자신을 희생하는 행동 경향을 보입니다..", 
			"헌신자는 사교형(Influence)의 강점에 정적인 상황을 선호하는 사고가 더해진 성향을 가집니다. 따라서 희생이 요구되는 상황에 쳐했을 떄, 해당 상황에서 서로의 눈치를 보며 불안함을 느끼고 스트레스를 받는 상황을 피하고자 본인이 피해를 자처하는 행동 경향을 보입니다.", 
			"헌신자는 타인에게 굉장히 선하다는 인상을 남깁니다. 타인을 잘 신경써주고 배려하며 나쁜 말을 싫어하고 논쟁 및 비평 등의 상황에 스트레스를 받습니다. 즉 타인의 기분과 행동을 잘 캐치해내며, 그만큼 눈치가 굉장히 빠른 편입니다. 포근한 보호자 또는 따뜻한 코치와 같은 인상을 주기도 합니다.", 
			"헌신자는 사교형(Influence)의 그 어떤 패턴보다 사람을 중요하게 생각합니다. 편한 사람을 선호하며, 누군가의 희생이 필요한 상황에서 편하지 못한 사람을 대신해 희생하고 싶지 않은 마음에도 불구하고, 결국 또 본인을 희생하는 결과를 맞을 때 큰 스트레스를 받습니다. 험난한 세상 속 한 줄기 인류애를 보여주는 존재입니다. 주변에 흔치 않아 선함 정도의 이미지를 가지고 있습니다."
		],
		
		"협상가" : [
			"협상가는 분석적인 사고를 바탕으로 생각이 많아 선택에 더뎌하는 행동 경향을 보입니다.", 
			"협상가는 사교형(Influence) 패턴 중 가장 내성적인 성향을 가지고 있습니다. 사교와 관계를 중요시하긴 하나, 분석적인 성향이 강한 탓에 호감이 있어도 상대의 반응을 확신하기 이전엔 섣불리 먼저 관계를 맺지 않습니다. 사람이 되었건 상황이 되었건 일단 의심 한 스푼을 첨가하고 보는 행동 경향을 보입니다.", 
			"협상가는 타인에게 두 가지 인상을 남깁니다. 처음엔 내성적으로 사람과 친해지기 어려워하는 인상을 받다가도, 협상가의 관계 서클 내부로 들어간 이후로는 굉장히 활발하고 외향적이며 친근한 인상을 갖게됩니다. 때문에 업무 환경에서 협상가를 만난 뒤 친해지게 된 경우, 타인에게 '알고보니 전혀 다른 사람' 이라는 이미지를 심어줍니다.", 
			"협상가는 분석을 통해 상황을 객관적으로 볼 줄 아는 능력을 소유하고 있습니다. 따라서 외교 또는 프로젝트 매니저와 같은 업무를 볼 때 최고의 능력을 자랑합니다. 여기에 일부 신중하고 계획적인 성향이 더해진 사람들은 특정 제안을 이뤄내기 위해 상황을 조정해내는 능력을 나타내기도 합니다."
		],
		
		"디자이너" : [
			"디자이너는 성취하고자 하는 욕구를 바탕으로 워커홀릭 또는 투잡 등의 바쁘게 행동하는 경향을 보입니다.", 
			"디자이너는 DISC의 12가지 패턴 중 가장 흔치 않은 패턴입니다. 안정적인 상황을 추구하는 성향과 목표를 달성하고자 하는 진취적인 성향이 공존하기 때문입니다. 떄문에 두 성향 사이에서 늘 선택을 고민하며, 매번 선택이 달라 '나도 나를 모르겠어요' 와 같은 말을 종종 하곤 합니다.", 
			"디자이너는 안정적이며 진취적이기 때문에 내향적인 행동 경향과 외향적인 행동 경향을 모두 가지고 있습니다. 다만 주된 행동 경향은 내향에 가까우며, 업무 환경에선 주로 외향적인 행동 경향을 보입니다. 특히 업무를 볼 땐 계획적인 성향과 진취적인 성향이 융합하여 두각을 드러내기 때문에 프로페셔널한 이미지를 잘 풍기곤 합니다.", 
			"디자이너는 경우에 따라 두 가지 행동 경향을 보입니다. 흥미에 따라 트렌드를 추구하는 예술적인 면모를 보이기도 하고, 논리적인 사고와 분석적인 판단으로 결론을 도출하는 법정 수사관과 같은 면모를 보이기도 합니다. 상황에 따라 투잡을 소화하기도 하며, 육아의 경우엔 커리어를 놓치고 싶지 않은 탓에 휴직 대신 업무를 선택하여 병행하기도 합니다."
		],

		"상담가" : [
			"상담가는 늘 좋고 편안한 상황이 유지되길 바라는 사고로 인해 회피적으로 행동하는 경향을 보입니다.", 
			"상담가는 안정형(Steadiness) 패턴 중 가장 극단적으로 안정적인 상황을 추구하는 성향을 가지고 있습니다. 때문에 논쟁이나 비판적인 상황에 쳐하게 되면 강한 불안감을 느껴 해당 상황에서 벗어나고자 합니다. 흔히 '공감성 수치' 가 굉장히 높아 추리물 또는 공포물 등 불안한 상황이 연속되는 드라마를 보지 못합니다. 로맨스 코미디나 성장물을 선호합니다.", 
			"다만 이런 회피적인 성향 덕분에 그 어떤 패턴들보다 타인에게 가장 잘 조언을 해주는 행동 경향을 보입니다. 조언을 구하고자 하는 상대방에게 상황에 대한 공감을 표현한 뒤, 해당 상황을 타파해보고자 다양한 아이디어와 해결 방법을 도출해냅니다. 덕분에 많은 타인들이 당신에게 상담을 받길 원합니다.", 
			"상담가 패턴이 노력을 통해 리더십을 가지게 된 경우, 객관적인 사고를 통해 양 측의 입장을 정리하고 상황을 원만하게 해결하여 타인에게 평화적 리더의 이미지를 각인시킵니다. 많은 사람들이 따르고자 하기에 가장 이상적인 상사로 손꼽힙니다. 다만 늘 평화로운 상황이 지속될 순 없기에 늘 회피가 답이 아니라는 걸 명심해야 합니다."
		],
		
		"관리자" : [
			"관리자는 세심하고 체계적인 성향으로 기록적이고 높은 기억력을 소화하는 행동 경향을 보입니다.", 
			"관리자는 안정형(Steadiness)의 다른 패턴보다 조금 더 내향적인 면모를 소유하고 있습니다. 본인이 정해놓은 틀 안에서만 행동하며, 그 외의 경우에 대해 매우 조심스러워하고 행동하길 꺼려합니다. 다만 틀 안에서는 계획적이고 객관적인 능력을 백 번 발휘하여 그 어떤 유형보다 가장 꼼꼼한 면모를 보입니다.", 
			"관리자는 꼼꼼한 성향을 바탕으로 평소에 기록을 생활화하곤 합니다. 다이어리를 즐겨쓰며 본인의 생각 뿐만 아니라 타인을 통해 전해들은 생각하지 못했던 부분까지 기록합니다. 이런 행동 경향 덕분에 직장에서 관리자 역할의 업무를 수행할 경우, 부하 직원들이 체계적이라는 분위기 속에서 안정감 있게 업무를 수행할 수 있게 됩니다.", 
			"관리자는 타인에게 소나무 같이 한결같다는 인상을 남깁니다. 본인이 정핸 룰을 벗어나지 않기 때문입니다. 또한 아직 일어나지 않은 일에 대해 빈번하게 걱정하는 경향을 보입니다. 한 번 시작하면 끝도없이 걱정을 이어나가기 때문에 의사소통 상황 속 타인이 지쳐하기도 합니다. 모든 일을 예측할 순 없기에 무계획적인 행동 또한 해봐도 된다는 걸 인지하면 좋습니다."
		],

		"설계자" : [
			"설계자는 업무중심적 사고와 프로세스를 바탕으로 워커홀릭의 행동 경향을 보입니다.", 
			"설계자는 DISC의 12가지 패턴 중 유일하게 나이와 연관이 깊습니다. 일상적인 생활 자체를 업무 환경과 동일하게 사고하고 행동하기 때문입니다. 따라서 10대 또는 20대 초반보단 사회 생활을 겪어본 사람에게 많이 나타나는 유형입니다. 만약 어린 나이에 해당 유형이 나왔다면 높은 확률로 장녀 혹은 장남의 위치 혹은 일찍 사회 생활을 시작한 환경적 요인에 영향을 받았을 것입니다.", 
			"설계자는 본인이 모르는 전문적 분야의 지식을 공유하는 것을 선호합니다. 때문에 연인 관계의 사람이 타 분야에 종사할수록 더욱 좋아하는 경향을 보입니다. 이상형을 말하게 될 때면 '내가 배울 수 있는 사람' 을 언급하곤 합니다. 워커홀릭 성향이 강하기 때문에 본인의 커리어를 존중해주지 않는다면 빠르게 애정이 식는 경향을 보입니다.",
			"설계자는 타인에게 차가워보인다는 인상을 남깁니다. 특히 업무적으로 만났을 때 더욱 이러한 인상이 도드라집니다. 공과 사를 또렷하게 구분하는 사람이라는 평가를 많이 받습니다. 사교형(Influence)의 사람들은 설계자를 처음엔 무서워하나, 나중으로 갈 수록 서로를 신기해하며 금새 친해지곤 합니다. 때문에 비즈니스 관계 한정으로 발이 넓은 경우가 많습니다."
		],

		"작가" : [
			"작가는 조용하고 내향적이지만 의사 표현을 확실하게 하는 행동 경향을 보입니다.", 
			"작가는 신중형(Compliance)의 강점에 외향적인 성향이 약간 첨가된 유형입니다. 보통 대화를 주고받는데 어려움이 없고 낯가림이 없어 사교형(Influence)으로 보이나, 정작 진단 결과는 내향적인 사람으로 나와 주변의 많은 사람들이 놀라곤 합니다. 다만 잘 이어나가는 대화는 그저 낯가림이 크게 없을 뿐, 정작 본인의 속 이야기는 잘 하지 않는 경향을 보입니다.", 
			"작가는 호기심이 많습니다. 세상에 궁금한게 많은 만큼 대화도 많고 주제도 다양한 편입니다. 때문에 지식의 폭도 넓고 그만큼 말을 논리적으로 잘 합니다. 하지만 어쨌거나 대화의 주제가 '내가 아닌 다른 것' 이기 때문에 타인에게 평론가의 이미지를 잘 심어주곤 합니다. 대학 교수 또는 강사와 같은 직업과 잘 어울리는 행동 경향을 소유하고 있습니다.", 
			"작가는 한 가지 시선에 치우치지 않고 다양한 시각으로 사건을 바라보기 때문에 논쟁 또는 비판적인 상황에 대해 중재를 잘 하는 경향을 보입니다. 특히 하나의 관점에 다양한 시선을 보유하고 있다는 점에서 극중 인물의 시선을 잘 나타내고 서술하는 작가와 같은 업무에 큰 성과를 발휘하곤 합니다."
		],
		
		"원칙주의자" : [
			"원칙주의자는 말 그대로 규칙 · 규율 · 도덕을 굉장히 중요시하는 행동 경향을 보입니다.", 
			"원칙주의자는 신중형(Compliance)의 패턴 중 가장 신중함이 강한 유형입니다. 때문에 타인에게 도대체 무슨 재미로 살고 있냐는 말을 많이 듣습니다. 개중에 몇몇은 함께 탈선하자며 원칙주의자를 부추기곤 합니다. 본인 또한 원칙주의에 스트레스를 받곤 하지만, 개개인마다 다른 스트레스 해소법으로 평정심을 유지하는 경향이 있습니다.", 
			"원칙주의자는 정이 많습니다. 좋아하는 사람에게 선물을 줄 때 최소 세 가지의 조건을 고려합니다. 가격이 합리적인지, 선물 받는 사람에게 실용적인 물건인지, 마지막으로 내가 주는 이 선물에 대해 의미 부여가 가능한지 입니다. 따라서 원칙주의자의 선물은 절대 실패하는 법이 없습니다.", 
			"원칙주의자는 칭찬을 칭찬으로 잘 받아들이지 못하곤 합니다. 의심이 많다기보단 칭찬 자체는 좋은데 칭찬 내용을 잘 납득하지 못하는 경향이 있습니다. 어쨌거나 칭찬이기에 고마워하며 넘어가곤 하지만, 같은 신중형(Compliance) 패턴의 사람이 하는 칭찬은 객관적이고 논리적이라 빠르게 납득하고 고마워합니다."
		],

		// Default
		"타입명" : [
			"HI", 
			"HI", 
			"HI", 
			"HI"
		]
		
	};

	// GNB Menu
	const [isGnb, setIsGnb] = React.useState(false);
	const fnIsGnb = () => {
		if (isGnb === false) setIsGnb(true);
		if (isGnb === true) setIsGnb(false);
	}

	// Wait Layer
	const [isWait, setIsWait] = React.useState(true);
	const fnIsWait = () => {
		if (isWait === false) setIsWait(true);
		if (isWait === true) setIsWait(false);
	}

	// Contnets
	// 1 - DISC Test Page
	// 2 - DISC Load Page
	// 3 - DISC Result Page
	// 4 - DISC Definition Page
	const [status, setStatus] = React.useState(1);
	const [types, setTypes] = React.useState(null);

	// Result Variable
	const [befCalAnswer, setBefCalAnswer] = React.useState([]);
	

	return (
		<>
		<div className='pc-left'></div>
		<div className="App">
			<div className='navbar'>
				<img src={logo} className='logo' alt='personality_behaviors'></img>
				<img src={logo_text} className='logo_text' alt='personality_behaviors'></img>
				<img src={menu_icon} className='menu_icon' alt='menu_icon' onClick={fnIsGnb}></img>
			</div>
			<div className='content-body'>
				<Definition status={status} setStatus={setStatus}/>
				<Test status={status} setStatus={setStatus} setBefCalAnswer={setBefCalAnswer} questions={questions} isGnb={isGnb} fnIsWait={fnIsWait}/>
				<Result status={status} setStatus={setStatus} befCalAnswer={befCalAnswer} questions={questions} behaviorType={behaviorType}/>
			</div>
			<Gnb fnIsGnb={fnIsGnb} isGnb={isGnb} status={status} setStatus={setStatus} fnIsWait={fnIsWait} setBefCalAnswer={setBefCalAnswer} types={types} setTypes={setTypes}/>
			<Wait isWait={isWait} fnIsWait={fnIsWait} status={status} setStatus={setStatus}/>
		</div>
		<div className='pc-right'></div>
		</>
	);
}

export default App;
