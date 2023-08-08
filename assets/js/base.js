(function () {
  "use strict";

  /* ------------------------------------- */
  // Your data goes here
  /* ------------------------------------- */
  const app = Vue.createApp({
    data() {
      return {
        // the date my career started (change to yours)
        careerStartDate: 2020,
        // the date copyright started (change to yours)
        copyrightStartDate: 2023,
        name: "Liu Bo",
        email: "i_liubo0310@163.com",
        introduction:
          "Data Scientist with over 5 years of exeperience serving Industry Giants (Baidu.com, Weibo.com, Ctrip.com and P&G)",
        workExperiences: [
          {
            name: "Data Scientist (NLP)",
            company: "Epam",
            description: "P&G Product Knowledge Graph Platform",
            jobdesc: [
              "Designed and built Bert + LMCL model and use this classification model to predict the relation which is used to build tripets",
              "Used the trained model to represent the product to be predicted ,then calculated the confidence coefficient. The product will be judeg as a new relation when the score is higher than the threshold.",
              "The novel language model training includes: (1) data preparation (self structure/open source data/manual annotation), (2) prompt, including the abstract, settings, characters, summary of each chapter, and draft of the novel, Summary and Continuation (3) Lora training using the DeepSpeed framework on the WizardLM Censored SuperCOT - StoryTelling-30B-GGML model (4) Using NBCE and vector retrieval to solve the problem of long texts",
              "User based novel rewriting: (1) Returning the most relevant novel from user input through langchain+faiss. (2) Transforming user input into a prompt request model for characters and character descriptions that need to be modified. (3) Convert the selected novel fragment into a prompt to complete the request model and rewrite the novel fragment.",
            ],
          },
          {
            name: "Data Scientist (NLP)",
            company: "Baidu, Ltd",
            description: "Dialogue System",
            jobdesc: [
              "Designed ernie+HMCN model to recognize the hierarchy intents and designed ernie+bilstm+crf model to extract the slots。",
              "Used the data enhancement (ADEA +MLM) to prepare training data and deployed the model by distillation 。",
            ],
          },
          {
            name: "Data Scientist (CV+NLP)",
            company: "Weibo, Ltd",
            description:
              "Risk Control System, A system in Weibo platform aimed to intercept illegal information and identify users who make benefits by sending illegal information",
            jobdesc: [
              "OCR: the first componet used the VGG model to capture the features while the second component used the CTPN composed of three loss to detect the text, then the last componet used CRNN to recognize the text.",
              "Used the compare-aggregate structure which consist of preprocess layer using bilstm + self-attention, attention layer using soft-attention, last layer using convolution layer2",
            ],
          },
          {
            name: "Data Scientist (NLP)",
            company: "Ctrip",
            description: "Tourism Knowledge Graph Platform",
            jobdesc: [
              "OCR: the first componet used the VGG model to capture the features while the second component used the CTPN composed of three loss to detect the text, then the last componet used CRNN to recognize the text.",
              "Used the compare-aggregate structure which consist of preprocess layer using bilstm + self-attention, attention layer using soft-attention, last layer using convolution layer2",
            ],
          },
        ],
      };
    },

    created() {
      // get a theme to use
      this.getAppTheme();
    },

    mounted() {},

    methods: {
      getFullName() {
        this.name = "Fiki Wahyu";
      },
    },
    computed: {
      // get the total years of copyright
      copyrightDate() {
        const yearsDuration =
          new Date(
            new Date() - new Date(String(this.copyrightStartDate))
          ).getFullYear() - 1970;
        return yearsDuration === 0
          ? this.copyrightStartDate
          : `${this.copyrightStartDate} - ${
              this.copyrightStartDate + yearsDuration
            }`;
      },
    },
    directives: {
      // clone directive
      clone: {
        mounted(el) {
          el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
        },
      },
      // add stagger delay to children elements
      staggerdelay: {
        mounted(el, binding) {
          [...el.children].forEach((child, i) => {
            child.setAttribute(
              "style",
              `animation-delay: ${(i + 1) * (binding.value || 100)}ms`
            );
          });
        },
      },
    },
  });
  app.mount("#app");
})();
