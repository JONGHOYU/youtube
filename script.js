/**
 * Hong Kong Travel Curation Data & Logic
 */

// 엄선된 홍콩 여행 유튜브 영상 데이터셋
const VIDEOS_DATA = [
  {
    id: "gN-4rN-K_vI",
    youtubeId: "vXmE22M8EAE",
    title: "홍콩 3박4일 완벽 가이드! 이것만 보고 가면 끝 🇭🇰 필수 코스 총정리",
    creator: "여행 브이로거",
    category: "course",
    categoryLabel: "코스 & 팁",
    views: "1,240,000",
    viewsRaw: 1240000,
    duration: "18:24",
    uploadDate: "2024-04-12",
    description: "센트럴 미드레벨 에스컬레이터부터 빅토리아 피크, 란콰이퐁, 침사추이까지 홍콩을 처음 가거나 오랜만에 가는 분들을 위한 핵심 3박 4일 일정과 교통패스(옥토퍼스) 팁을 총정리했습니다.",
    tags: ["#홍콩여행", "#3박4일", "#여행코스", "#침사추이", "#빅토리아피크"],
    isFeatured: true
  },
  {
    id: "hK_dimsum_01",
    youtubeId: "W4iQ7cIdqA8",
    title: "현지인들 줄서는 찐 로컬 딤섬 & 완탕면 맛집 5곳 털기! (미슐랭부터 골목식당)",
    creator: "맛있는 여행자",
    category: "food",
    categoryLabel: "미식 투어",
    views: "890,000",
    viewsRaw: 890000,
    duration: "14:10",
    uploadDate: "2024-06-05",
    description: "홍콩 현지 로컬 맛집 탐방기! 원딤섬, 팀호완의 대표 메뉴부터 셩완 골목의 80년 전통 완탕면 노포, 바삭한 차슈바오와 망고 팬케이크까지!",
    tags: ["#홍콩맛집", "#딤섬맛집", "#완탕면", "#미슐랭", "#차찬텡"],
    isFeatured: true
  },
  {
    id: "hk_vlog_solo",
    youtubeId: "o9eUa7QeEAE",
    title: "혼자 떠난 낭만 가득 홍콩 여행 브이로그 🧳 페리 타고 야경 감상, 레트로 골목 산책",
    creator: "솔로 트래블러",
    category: "vlog",
    categoryLabel: "여행 브이로그",
    views: "640,000",
    viewsRaw: 640000,
    duration: "21:45",
    uploadDate: "2024-05-18",
    description: "홍콩 감성에 푹 빠진 4박 5일 혼자 여행. 스타페리를 타고 빅토리아 하버 건너기, 삼수이포 빈티지 숍 탐방, 골목 카페 투어 이야기.",
    tags: ["#홍콩브이로그", "#혼자여행", "#스타페리", "#감성여행"],
    isFeatured: true
  },
  {
    id: "hk_disney_frozen",
    youtubeId: "7L_8oP9s84w",
    title: "홍콩 디즈니랜드 겨울왕국 세상 오픈! ❄️ 대기 없이 즐기는 꿀팁 & 어트랙션 총정리",
    creator: "테마파크 탐험대",
    category: "attraction",
    categoryLabel: "테마파크",
    views: "1,520,000",
    viewsRaw: 1520000,
    duration: "16:32",
    uploadDate: "2024-02-14",
    description: "전 세계 최초 홍콩 디즈니랜드 '겨울왕국 세상(World of Frozen)' 완벽 정복! 에렌델 성 둘러보기, 프로즌 에버 애프터, 굿즈 쇼핑 및 불꽃놀이 명당자리 팁.",
    tags: ["#홍콩디즈니랜드", "#겨울왕국", "#디즈니랜드꿀팁", "#어트랙션"],
    isFeatured: true
  },
  {
    id: "hk_nightview_photo",
    youtubeId: "fM0t7F7qGgA",
    title: "인생샷 건지는 홍콩 야경 명소 TOP 6 📸 심포니 오브 라이트 & 루프탑 바",
    creator: "포토 트래블",
    category: "nightview",
    categoryLabel: "야경 & 명소",
    views: "430,000",
    viewsRaw: 430000,
    duration: "12:15",
    uploadDate: "2024-03-29",
    description: "홍콩 여행의 꽃 야경! 피크트램 타고 올라간 스카이테라스428, 침사추이 시계탑 산책로, 란콰이퐁 루프탑 바에서 바라본 환상적인 네온 뷰 스팟.",
    tags: ["#홍콩야경", "#심포니오브라이트", "#피크트램", "#루프탑바", "#인생샷"],
    isFeatured: false
  },
  {
    id: "hk_macau_daytrip",
    youtubeId: "P_w2eX091_k",
    title: "홍콩에서 마카오 당일치기 완전정복 ⛴️ 페리 예약부터 성바울성당, 카지노 투어",
    creator: "여행 백과사전",
    category: "course",
    categoryLabel: "코스 & 팁",
    views: "720,000",
    viewsRaw: 720000,
    duration: "15:50",
    uploadDate: "2024-07-01",
    description: "홍콩 여행 필수 코스 마카오 당일치기! 코타이 워터젯 페리 탑승법, 베네시안 호텔 에그타르트 맛집(로드스토우), 성 바울 성당 유적지 코스.",
    tags: ["#마카오당일치기", "#홍콩마카오", "#페리이용법", "#로드스토우", "#에그타르트"],
    isFeatured: false
  },
  {
    id: "hk_cha_chaan_teng",
    youtubeId: "mG9z9X8c1aY",
    title: "홍콩 가면 꼭 먹어야 하는 차찬텡(茶餐廳) BEST 4 🍞 프렌치토스트 & 밀크티 성지",
    creator: "먹방로드",
    category: "food",
    categoryLabel: "미식 투어",
    views: "510,000",
    viewsRaw: 510000,
    duration: "11:08",
    uploadDate: "2024-06-20",
    description: "버터가 사르르 녹아내리는 홍콩식 프렌치토스트, 진하고 쌉싸름한 란퐁유엔 실크스타킹 밀크티, 겉바속촉 파인애플 번(뽀뤄바오) 로컬 투어!",
    tags: ["#차찬텡", "#란퐁유엔", "#밀크티", "#프렌치토스트", "#홍콩식디저트"],
    isFeatured: false
  },
  {
    id: "hk_budget_tips",
    youtubeId: "d67YpL21z_M",
    title: "홍콩 여행 경비 얼마 들까? 💰 환전, 호텔, 교통비, 쇼핑 총정리 (가성비 꿀팁)",
    creator: "스마트 트래블",
    category: "course",
    categoryLabel: "코스 & 팁",
    views: "980,000",
    viewsRaw: 980000,
    duration: "17:15",
    uploadDate: "2024-05-02",
    description: "트래블로그 & 트래블월렛 카드 사용기, 옥토퍼스 카드 실물 vs 모바일 비교, 호텔 추천 지역(침사추이 vs 센트럴), 쇼핑 리스트(제니쿠키, 기화병가) 대공개.",
    tags: ["#홍콩여행경비", "#옥토퍼스카드", "#제니베이커리", "#기화병가", "#환전팁"],
    isFeatured: false
  },
  {
    id: "hk_vlog_night",
    youtubeId: "k_219Lx78Ew",
    title: "2층 트램(딩딩) 타고 홍콩 섬 골목 여행 🚋 센트럴에서 코즈웨이베이까지 레트로 감성",
    creator: "어반 워커",
    category: "vlog",
    categoryLabel: "여행 브이로그",
    views: "370,000",
    viewsRaw: 370000,
    duration: "19:02",
    uploadDate: "2024-08-11",
    description: "단돈 몇백 원으로 즐기는 홍콩 최고의 낭만! 2층 트램 맨 앞자리에 앉아 바라보는 홍콩 도심의 화려한 간판과 일상 풍경을 담은 힐링 브이로그입니다.",
    tags: ["#딩딩트램", "#홍콩트램", "#센트럴", "#코즈웨이베이", "#감성여행"],
    isFeatured: false
  }
];

// App State
let state = {
  currentCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  bookmarksOnly: false,
  bookmarks: JSON.parse(localStorage.getItem("hk_bookmarks") || "[]"),
  currentModalVideoId: null
};

// DOM References
const videoGrid = document.getElementById("videoGrid");
const resultsCount = document.getElementById("resultsCount");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const bookmarkFilterBtn = document.getElementById("bookmarkFilterBtn");
const bookmarkCount = document.getElementById("bookmarkCount");
const emptyState = document.getElementById("emptyState");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const totalVideosCount = document.getElementById("totalVideosCount");
const activeFilterBadge = document.getElementById("activeFilterBadge");

// Modal References
const videoModal = document.getElementById("videoModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalIframe = document.getElementById("modalIframe");
const modalTitle = document.getElementById("modalTitle");
const modalCreator = document.getElementById("modalCreator");
const modalCategory = document.getElementById("modalCategory");
const modalViews = document.getElementById("modalViews");
const modalDuration = document.getElementById("modalDuration");
const modalDesc = document.getElementById("modalDesc");
const modalTags = document.getElementById("modalTags");
const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
const modalBookmarkText = document.getElementById("modalBookmarkText");
const modalExternalLink = document.getElementById("modalExternalLink");
const toast = document.getElementById("toast");

// Initialize App
function initApp() {
  totalVideosCount.textContent = VIDEOS_DATA.length;
  updateBookmarkCountUI();
  setupEventListeners();
  renderVideos();
}

// Event Listeners
function setupEventListeners() {
  // Category tabs
  categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-btn");
    if (!btn) return;
    
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    state.currentCategory = btn.dataset.category;
    renderVideos();
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderVideos();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderVideos();
  });

  // Sort select
  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderVideos();
  });

  // Bookmark filter button
  bookmarkFilterBtn.addEventListener("click", () => {
    state.bookmarksOnly = !state.bookmarksOnly;
    bookmarkFilterBtn.classList.toggle("active", state.bookmarksOnly);
    renderVideos();
  });

  // Reset filters button
  resetFilterBtn.addEventListener("click", () => {
    resetAllFilters();
  });

  // Modal close
  modalCloseBtn.addEventListener("click", closeModal);
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });

  // Escape key to close modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.style.display !== "none") {
      closeModal();
    }
  });

  // Modal Bookmark Toggle
  modalBookmarkBtn.addEventListener("click", () => {
    if (state.currentModalVideoId) {
      toggleBookmark(state.currentModalVideoId);
      updateModalBookmarkState(state.currentModalVideoId);
    }
  });
}

function resetAllFilters() {
  state.currentCategory = "all";
  state.searchQuery = "";
  state.bookmarksOnly = false;
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  bookmarkFilterBtn.classList.remove("active");
  document.querySelectorAll(".category-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.category === "all");
  });
  renderVideos();
}

// Filter and Sort Logic
function getFilteredVideos() {
  return VIDEOS_DATA.filter(video => {
    // Category filter
    if (state.currentCategory !== "all" && video.category !== state.currentCategory) {
      return false;
    }

    // Bookmarks only filter
    if (state.bookmarksOnly && !state.bookmarks.includes(video.id)) {
      return false;
    }

    // Search query filter
    if (state.searchQuery) {
      const q = state.searchQuery;
      const matchTitle = video.title.toLowerCase().includes(q);
      const matchCreator = video.creator.toLowerCase().includes(q);
      const matchDesc = video.description.toLowerCase().includes(q);
      const matchTags = video.tags.some(tag => tag.toLowerCase().includes(q));
      if (!matchTitle && !matchCreator && !matchDesc && !matchTags) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === "views") {
      return b.viewsRaw - a.viewsRaw;
    } else if (state.sortBy === "newest") {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    } else {
      // Featured
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    }
  });
}

// Render Videos
function renderVideos() {
  const filtered = getFilteredVideos();

  // Results count
  resultsCount.innerHTML = `총 <strong>${filtered.length}</strong>개의 영상`;

  // Update active filter badge
  if (state.bookmarksOnly) {
    activeFilterBadge.textContent = "북마크 필터 적용 중";
    activeFilterBadge.style.display = "inline-block";
  } else if (state.searchQuery) {
    activeFilterBadge.textContent = `'${state.searchQuery}' 검색 결과`;
    activeFilterBadge.style.display = "inline-block";
  } else {
    activeFilterBadge.style.display = "none";
  }

  if (filtered.length === 0) {
    videoGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  videoGrid.innerHTML = filtered.map(video => {
    const isBookmarked = state.bookmarks.includes(video.id);
    const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

    return `
      <article class="video-card" data-video-id="${video.id}">
        <div class="card-thumbnail-wrapper" onclick="openVideoModal('${video.id}')">
          <img class="card-thumbnail" src="${thumbUrl}" alt="${video.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=640&q=80'">
          <span class="card-badge">${video.categoryLabel}</span>
          <span class="card-duration">${video.duration}</span>
          <div class="play-overlay">
            <div class="play-btn-circle">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>

        <div class="card-content">
          <div class="card-creator-row">
            <span class="card-creator">
              <svg class="icon" style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              ${video.creator}
            </span>
            <button class="bookmark-icon-btn ${isBookmarked ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleBookmark('${video.id}')" 
                    title="${isBookmarked ? '북마크 해제' : '북마크 저장'}">
              <svg class="icon" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>

          <h3 class="card-title" onclick="openVideoModal('${video.id}')">${video.title}</h3>
          <p class="card-desc">${video.description}</p>

          <div class="card-tags">
            ${video.tags.slice(0, 3).map(tag => `<span class="tag-badge">${tag}</span>`).join('')}
          </div>

          <div class="card-meta-row">
            <span>조회수 ${video.views}회</span>
            <span>${video.uploadDate}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Bookmark Logic
function toggleBookmark(videoId) {
  const index = state.bookmarks.indexOf(videoId);
  if (index > -1) {
    state.bookmarks.splice(index, 1);
    showToast("북마크에서 제거되었습니다.");
  } else {
    state.bookmarks.push(videoId);
    showToast("북마크에 저장되었습니다! ⭐");
  }

  localStorage.setItem("hk_bookmarks", JSON.stringify(state.bookmarks));
  updateBookmarkCountUI();
  renderVideos();

  if (state.currentModalVideoId === videoId) {
    updateModalBookmarkState(videoId);
  }
}

function updateBookmarkCountUI() {
  bookmarkCount.textContent = state.bookmarks.length;
}

function updateModalBookmarkState(videoId) {
  const isBookmarked = state.bookmarks.includes(videoId);
  modalBookmarkBtn.classList.toggle("active", isBookmarked);
  modalBookmarkText.textContent = isBookmarked ? "저장됨" : "북마크";
}

// Modal Player Open / Close
function openVideoModal(videoId) {
  const video = VIDEOS_DATA.find(v => v.id === videoId);
  if (!video) return;

  state.currentModalVideoId = video.id;

  modalIframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
  modalTitle.textContent = video.title;
  modalCreator.textContent = video.creator;
  modalCategory.textContent = video.categoryLabel;
  modalViews.textContent = `조회수 ${video.views}회`;
  modalDuration.textContent = `재생시간 ${video.duration}`;
  modalDesc.textContent = video.description;
  modalExternalLink.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  modalTags.innerHTML = video.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
  updateModalBookmarkState(video.id);

  videoModal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

function closeModal() {
  videoModal.style.display = "none";
  modalIframe.src = ""; // Stop video playback
  document.body.style.overflow = "";
  state.currentModalVideoId = null;
}

// Toast notification
let toastTimer = null;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2300);
}

// Expose openVideoModal and toggleBookmark globally for inline onclick
window.openVideoModal = openVideoModal;
window.toggleBookmark = toggleBookmark;

// Run App
document.addEventListener("DOMContentLoaded", initApp);
