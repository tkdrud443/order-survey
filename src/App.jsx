import { useMemo, useState } from "react";

const questions = [
  {
  id: 1,
  title: "어떤 공간 분위기가 더 마음에 드시나요?",
  subtitle: "첫인상으로 가장 끌리는 이미지를 선택해주세요.",
  options: [
    {
      label: "Fancy",
      title: "화려 / 입체감",
      desc: "하나뿐인 디자인, 올록볼록, 포인트",
      image: "/images/q1-1.png",
      score: { natural: 3, modern: 0, japandi: 1, industrial: 0 },
    },
    {
      label: "Neat",
      title: "깔끔 / 세련",
      desc: "깔끔한 선맞춤, 차분한 톤, 세련된 분위기",
      image: "/images/q1-2.png",
      score: { natural: 0, modern: 3, japandi: 1, industrial: 0 },
    },
    {
      label: "Antique",
      title: "앤틱 / 옛스러움",
      desc: "편안하고 옛스러운 원목 분위기",
      image: "/images/q1-3.jpg",
      score: { natural: 3, modern: 0, japandi: 2, industrial: 0 },
    },
    {
      label: "Modern",
      title: "현대 / 차가움",
      desc: "현대적이고 불필요하지않은 디자인",
      image: "/images/q1-4.png",
      score: { natural: 1, modern: 1, japandi: 0, industrial: 3 },
    },
  ],
},,
  {
    id: 2,
    title: "선호하는 원목 색상은?",
    subtitle: "원하는 색상이 없다면 직접 입력해주세요.",
    options: [
      {
        label: "Oak",
        title: "밝은 오크류",
        desc: "화사하고 넓어 보이는 따뜻한 컬러",
        image: "/images/q2-1.jpg",
        score: { natural: 3, modern: 0, japandi: 2, industrial: 0 },
      },
      {
        label: "Walnut",
        title: "진한 월넛류",
        desc: "고급스럽고 묵직한 분위기의 컬러",
        image: "/images/q2-2.jpg",
        score: { natural: 0, modern: 2, japandi: 1, industrial: 2 },
      },
      {
        type: "text",
        label: "Custom",
        title: "직접 입력",
        desc: "원하는 원목 색상이나 분위기를 입력해주세요.",
        placeholder: "예: 화이트, 블랙, 필름재질 등",
        score: { natural: 1, modern: 1, japandi: 1, industrial: 1 },
      },
    ],
  },
  {
    id: 3,
    layout: "compact",
    title: "입구는 어떤 형태가 좋으신가요?",
    subtitle: "원하시는 유형을 선택해주세요.",
    options: [
      {
        label: "OPEN",
        title: "오픈형",
        desc: "직관적으로 뚫려있는 형태",
        image: "/images/q3-1.jpg",
        score: { natural: 2, modern: 0, japandi: 2, industrial: 0 },
      },
      {
        label: "HINGE",
        title: "여닫이형",
        desc: "깔끔한 일반적인 형태",
        image: "/images/q3-2.png",
        score: { natural: 0, modern: 3, japandi: 0, industrial: 1 },
      },
      {
        label: "DRAWER",
        title: "서랍형",
        desc: "깊숙한 내부까지 사용할 수 있는 형태",
        image: "/images/q3-3.png",
        score: { natural: 0, modern: 3, japandi: 0, industrial: 1 },
      },
      {
        label: "SLIDING",
        title: "슬라이딩형",
        desc: "효율적인 공간 활용",
        image: "/images/q3-4.jpg",
        score: { natural: 0, modern: 3, japandi: 0, industrial: 1 },
      },
      {
        label: "MIX",
        title: "혼합형",
        desc: "여러 방식을 함께 사용하는 형태",
        image: "/images/q3-5.png",
        score: { natural: 1, modern: 2, japandi: 1, industrial: 1 },
      },
    ],
  },
  {
    id: 4,
    title: "원하는 자재는 어떤 건가요?",
    subtitle: "활용도에 따라 자재를 선택해주세요. 상황에 따라 상담 후 변경될 수 있습니다.",
    options: [
      {
        label: "소프트우드",
        title: "저렴하고 가벼움",
        desc: "이동형이나 가벼운 물건을 올리는 데 적합",
        image: "/images/q4-1.png",
        score: { natural: 3, modern: 0, japandi: 2, industrial: 0 },
      },
      {
        label: "하드우드",
        title: "튼튼하고 고급스러움",
        desc: "무거운 물건을 올리거나 오래 사용하기에 적합",
        image: "/images/q4-2.png",
        score: { natural: 0, modern: 2, japandi: 0, industrial: 3 },
      },
      {
        label: "상담 후 결정",
        title: "상담 후 결정",
        desc: "전문가 상담 후 상황에 맞게 결정",
        image: "/images/q4-4.png",
        score: { natural: 1, modern: 1, japandi: 1, industrial: 1 },
      },
    ],
  },
  {
    id: 5,
    multi: true,
    ranking: true,
    title: "가구를 고를 때 중요하게 생각하는 순위는?",
    subtitle: "중요한 순서대로 선택해주세요. 먼저 선택한 항목이 1위가 됩니다.",
    options: [
      {
        label: "Design",
        title: "디자인",
        desc: "공간 분위기와 잘 어울리는 외형",
        image: "/images/q5-1.png",
        score: { natural: 1, modern: 2, japandi: 1, industrial: 0 },
      },
      {
        label: "Storage",
        title: "수납성",
        desc: "실용적인 수납과 공간 활용",
        image: "/images/q5-2.png",
        score: { natural: 1, modern: 1, japandi: 2, industrial: 0 },
      },
      {
        label: "Durability",
        title: "내구성",
        desc: "오래 사용할 수 있는 튼튼함",
        image: "/images/q5-3.jpg",
        score: { natural: 2, modern: 0, japandi: 1, industrial: 2 },
      },
      {
        label: "Price",
        title: "가격",
        desc: "예산에 맞는 합리적인 선택",
        image: "/images/q5-4.jpg",
        score: { natural: 1, modern: 1, japandi: 1, industrial: 0 },
      },
      {
        label: "Care",
        title: "관리 편의성",
        desc: "청소와 유지관리가 쉬운 가구",
        image: "/images/q5-5.png",
        score: { natural: 2, modern: 1, japandi: 2, industrial: 0 },
      },
    ],
  },
];

const resultData = {
  natural: {
    name: "Natural Wood",
  },
  modern: {
    name: "Modern Minimal",
  },
  japandi: {
    name: "Japandi Mood",
  },
  industrial: {
    name: "Industrial Point",
  },
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwD_lAHzEr4ddJJrDy1tQh1I5HZVQbCFkvLNyGw9Cn7i-2CVkqUzWnNmii9cgRBb7Nz/exec";

function App() {
  const [step, setStep] = useState("home");
  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState({
    natural: 0,
    modern: 0,
    japandi: 0,
    industrial: 0,
  });

  const [history, setHistory] = useState([]);
  const [multiSelected, setMultiSelected] = useState([]);
  const [customInput, setCustomInput] = useState("");

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    residence: "",
    desiredDate: "",
    budget: "",
    customBudget: "",
    message: "",
  });

  const progress = Math.round(((current + 1) / questions.length) * 100);

  const resultKey = useMemo(() => {
    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  }, [scores]);

  const result = resultData[resultKey];

  const resetCustomerInfo = () => {
    setCustomerInfo({
      name: "",
      phone: "",
      residence: "",
      desiredDate: "",
      budget: "",
      customBudget: "",
      message: "",
    });
  };

  const startSurvey = () => {
    setStep("survey");
    setCurrent(0);
    setScores({
      natural: 0,
      modern: 0,
      japandi: 0,
      industrial: 0,
    });


    setHistory([]);
    setMultiSelected([]);
    setCustomInput("");
    resetCustomerInfo();
  };

  const handleStartSurvey = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  startSurvey();
};

  const selectOption = (option, customValue = "") => {
    const nextScores = { ...scores };

    Object.keys(option.score).forEach((key) => {
      nextScores[key] += option.score[key];
    });

    const nextHistory = [
      ...history,
      {
        questionId: questions[current].id,
        question: questions[current].title,
        answer: option.type === "text" ? customValue : option.title,
        label: option.label,
        score: option.score,
      },
    ];

    setScores(nextScores);
    setHistory(nextHistory);
    setCustomInput("");

    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setStep("result");
      } else {
        setCurrent(current + 1);
      }
    }, 180);
  };

  const toggleMultiOption = (option) => {
    setMultiSelected((prev) => {
      const exists = prev.some((item) => item.title === option.title);

      if (exists) {
        return prev.filter((item) => item.title !== option.title);
      }

      return [...prev, option];
    });
  };

  const submitMultiQuestion = () => {
    if (multiSelected.length === 0) {
      alert("하나 이상 선택해주세요.");
      return;
    }

    const nextScores = { ...scores };
    const totalScore = {
      natural: 0,
      modern: 0,
      japandi: 0,
      industrial: 0,
    };

    multiSelected.forEach((option, index) => {
      const weight = multiSelected.length - index;

      Object.keys(option.score).forEach((key) => {
        const addedScore = option.score[key] * weight;
        nextScores[key] += addedScore;
        totalScore[key] += addedScore;
      });
    });

    const nextHistory = [
      ...history,
      {
        questionId: questions[current].id,
        question: questions[current].title,
        answer: multiSelected
          .map((item, index) => `${index + 1}위: ${item.title}`)
          .join(", "),
        label: multiSelected
          .map((item, index) => `${index + 1}위 ${item.label}`)
          .join(", "),
        multiple: true,
        ranking: true,
        totalScore,
      },
    ];

    setScores(nextScores);
    setHistory(nextHistory);
    setMultiSelected([]);

    if (current + 1 >= questions.length) {
      setStep("result");
    } else {
      setCurrent(current + 1);
    }
  };

  const goBack = () => {
    if (current === 0) {
      setStep("home");
      return;
    }

    const previous = history[history.length - 1];
    const nextScores = { ...scores };

    if (previous?.totalScore) {
      Object.keys(previous.totalScore).forEach((key) => {
        nextScores[key] -= previous.totalScore[key];
      });
    } else if (previous?.score) {
      Object.keys(previous.score).forEach((key) => {
        nextScores[key] -= previous.score[key];
      });
    }

    const previousQuestion = questions[current - 1];
    const textOption = previousQuestion?.options.find(
      (option) => option.type === "text"
    );

    if (textOption && previous?.label === textOption.label) {
      setCustomInput(previous.answer);
    } else {
      setCustomInput("");
    }

    setScores(nextScores);
    setHistory(history.slice(0, -1));
    setMultiSelected([]);
    setCurrent(current - 1);
  };

  const completeSurvey = async () => {
    if (!customerInfo.name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!customerInfo.phone.trim()) {
      alert("전화번호를 입력해주세요.");
      return;
    }

    const finalBudget =
      customerInfo.budget === "500만원 이상"
        ? customerInfo.customBudget || "500만원 이상"
        : customerInfo.budget;

    const payload = {
      createdAt: new Date().toISOString(),
      resultKey,
      resultName: result?.name || "",
      scores,
      answers: history,
      customer: {
        name: customerInfo.name,
        phone: customerInfo.phone,
        residence: customerInfo.residence,
        desiredDate: customerInfo.desiredDate,
        budget: finalBudget,
        message: customerInfo.message,
      },
      userAgent: navigator.userAgent,
    };

    localStorage.setItem(
      "orderFurnitureSurveyComplete",
      JSON.stringify(payload)
    );

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      alert("설문이 완료되었습니다.");
      setStep("done");
    } catch (error) {
      console.error(error);
      alert("저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <main>
      {step === "home" && (
        <section className="home">
          <div className="hero-card">
            <div className="brand">ORDER FURNITURE</div>
            <div className="badge">Style Finder</div>

            <h1>
              당신에게 어울리는
              <br />
              원목 가구 스타일 찾기
            </h1>

            <p>
              몇 가지 이미지를 선택하면 고객님의 취향을 분석해
              <br />
              어울리는 원목, 컬러, 형태를 추천해드립니다.
            </p>

            <div className="hero-info">
              <span>약 2분 소요</span>
              <span>사진 선택형</span>
              <span>무료 진단</span>
            </div>

            <button
              type="button"
              className="primary-btn start-btn"
              onClick={handleStartSurvey}
              onTouchEnd={handleStartSurvey}
            >
              시작하기
            </button>
          </div>
        </section>
      )}

      {step === "survey" && (
        <section className="survey">
          <div className="topbar">
            <button className="ghost-btn" onClick={goBack}>
              이전
            </button>

            <div className="progress-wrap">
              <div className="progress-text">
                <span>
                  {current + 1} / {questions.length}
                </span>
                <span>{progress}%</span>
              </div>

              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="question-area">
            <p className="question-count">QUESTION {current + 1}</p>
            <h2>{questions[current].title}</h2>
            <p>{questions[current].subtitle}</p>

            <div
              className={
  questions[current].multi
    ? "option-grid multi-grid"
    : questions[current].id === 1
    ? "option-grid four-grid"
    : [2, 4].includes(questions[current].id)
    ? "option-grid three-grid"
    : questions[current].layout === "compact"
    ? "option-grid compact-grid"
    : "option-grid"
}
            >
              {questions[current].options.map((option) => {
                if (option.type === "text") {
                  return (
                    <div
                      className="option-card custom-option-card"
                      key={option.title}
                    >
                      <div className="custom-visual">
                        <span>{option.label}</span>
                      </div>

                      <div className="option-content">
                        <strong>{option.title}</strong>
                        <p>{option.desc}</p>

                        <input
                          className="custom-answer-input"
                          placeholder={option.placeholder}
                          value={customInput}
                          onChange={(e) => setCustomInput(e.target.value)}
                        />

                        <button
                          className="custom-submit-btn"
                          onClick={() => {
                            if (!customInput.trim()) {
                              alert("원하는 색상을 입력해주세요.");
                              return;
                            }

                            selectOption(option, customInput.trim());
                          }}
                        >
                          입력 완료
                        </button>
                      </div>
                    </div>
                  );
                }

                const isSelected = multiSelected.some(
                  (item) => item.title === option.title
                );

                const selectedIndex = multiSelected.findIndex(
                  (item) => item.title === option.title
                );

                return (
                  <button
                    className={
                      questions[current].multi
                        ? `option-card multi-option rank-option ${
                            isSelected ? "selected" : ""
                          }`
                        : questions[current].layout === "compact"
                        ? "option-card compact-option"
                        : "option-card"
                    }
                    key={option.title}
                    onClick={() => {
                      if (questions[current].multi) {
                        toggleMultiOption(option);
                        return;
                      }

                      selectOption(option);
                    }}
                  >
                    <div className="visual photo-visual">
                      <img
  src={`/order-survey${option.image}`}
  alt={option.title}
/>
                      <span>{option.label}</span>
                    </div>

                    <div className="option-content">
                      {questions[current].ranking && isSelected && (
                        <div className="rank-badge">
                          {selectedIndex + 1}위
                        </div>
                      )}

                      <strong>{option.title}</strong>
                      <p>{option.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {questions[current].multi && (
              <div className="multi-actions">
                <p>
                  {multiSelected.length === 0
                    ? "중요한 순서대로 선택해주세요"
                    : multiSelected
                        .map((item, index) => `${index + 1}위 ${item.title}`)
                        .join(" · ")}
                </p>

                <button className="primary-btn" onClick={submitMultiQuestion}>
                  순위 확정
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {step === "result" && (
        <section className="result">
          <div className="result-card">
            <div className="result-intro">
              <p className="result-label">FINAL STEP</p>

              <h1>제작 문의 정보 입력</h1>

              <h2>마지막 단계입니다.</h2>

              <p>
                선택하신 답변을 바탕으로 오더퍼니처가 고객님의 취향과
                제작 방향을 참고할 수 있습니다.
              </p>
            </div>

            <div className="info-form">
              <h3>제작 문의 정보</h3>
              <p>오더퍼니처 제작 상담에 필요한 정보를 입력해주세요.</p>

              <div className="form-grid">
                <label>
                  이름
                  <input
                    type="text"
                    placeholder="성함을 입력해주세요"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        name: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  전화번호
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    value={customerInfo.phone}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        phone: e.target.value,
                      })
                    }
                  />
                </label>

                <label className="full">
                  거주지
                  <input
                    type="text"
                    placeholder="예: 서울 강남구, 경기 성남시"
                    value={customerInfo.residence}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        residence: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  희망 시공날짜
                  <input
                    type="date"
                    value={customerInfo.desiredDate}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        desiredDate: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  예산 (예산을 고려해 추천해드립니다.)
                  <select
                    value={customerInfo.budget}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        budget: e.target.value,
                        customBudget: "",
                      })
                    }
                  >
                    <option value="">선택해주세요</option>
                    <option value="0~50만원">0~50만원</option>
                    <option value="51~100만원">51~100만원</option>
                    <option value="101~150만원">101~150만원</option>
                    <option value="151~200만원">151~200만원</option>
                    <option value="201~300만원">201~300만원</option>
                    <option value="301~400만원">301~400만원</option>
                    <option value="401~500만원">401~500만원</option>
                    <option value="500만원 이상">
                      500만원 이상 직접 입력
                    </option>
                  </select>
                </label>

                {customerInfo.budget === "500만원 이상" && (
                  <label className="full">
                    500만원 이상 희망 견적가
                    <input
                      type="text"
                      placeholder="예: 650만원, 800만원, 1000만원 이상"
                      value={customerInfo.customBudget}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          customBudget: e.target.value,
                        })
                      }
                    />
                  </label>
                )}

                <label className="full">
                  하고 싶은 말
                  <textarea
                    placeholder="원하는 가구 종류, 사이즈, 분위기, 참고사항 등을 자유롭게 적어주세요."
                    value={customerInfo.message}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        message: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              <button className="primary-btn" onClick={completeSurvey}>
                완료
              </button>
            </div>

            <button className="ghost-wide" onClick={startSurvey}>
              다시 진단하기
            </button>
          </div>
        </section>
      )}

      {step === "done" && (
        <section className="result">
          <div className="result-card">
            <p className="result-label">COMPLETE</p>

            <h1>설문 완료</h1>

            <h2>참여해주셔서 감사합니다.</h2>

            <p>
              선택하신 답변은 오더퍼니처의 고객 취향 분석에 활용됩니다.
            </p>

            <button className="primary-btn" onClick={startSurvey}>
              다시 하기
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;