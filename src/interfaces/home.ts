export interface HomePage {
    heading: string;
    buttonText: string;
    buttonLink: string;
    heroImage: string;
    sections: {
      mission: {
        missionTopHeading: string;
        missionHeading: string;
        missionDetails: {
          missionContentHeading: string;
          missionContent: string;
          buttonText: string;
          buttonLink: string;
          missionImage1: string;
          missionImage2: string;
        };
      };
      innovation: {
        innovationHeading: string;
      };
    };
  }
  