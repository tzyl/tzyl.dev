import tzylAoc2021_1x from "../public/assets/blog/aoc-2021-reflections/tzyl-aoc2021@1x.png";
import tzylAoc2021_2x from "../public/assets/blog/aoc-2021-reflections/tzyl-aoc2021@2x.png";
import ramseyTheoryPartyProblemK3GraphBlue_1x from "../public/assets/blog/ramsey-theory-party-problem/k3-graph-blue@1x.png";
import ramseyTheoryPartyProblemK3GraphBlue_2x from "../public/assets/blog/ramsey-theory-party-problem/k3-graph-blue@2x.png";
import ramseyTheoryPartyProblemK3GraphRed_1x from "../public/assets/blog/ramsey-theory-party-problem/k3-graph-red@1x.png";
import ramseyTheoryPartyProblemK3GraphRed_2x from "../public/assets/blog/ramsey-theory-party-problem/k3-graph-red@2x.png";
import ramseyTheoryPartyProblemK5Counterexample_1x from "../public/assets/blog/ramsey-theory-party-problem/k5-counterexample@1x.png";
import ramseyTheoryPartyProblemK5Counterexample_2x from "../public/assets/blog/ramsey-theory-party-problem/k5-counterexample@2x.png";
import ramseyTheoryPartyProblemK6Graph_1x from "../public/assets/blog/ramsey-theory-party-problem/k6-graph@1x.png";
import ramseyTheoryPartyProblemK6Graph_2x from "../public/assets/blog/ramsey-theory-party-problem/k6-graph@2x.png";
import ramseyTheoryPartyProblemK6Pigeonhole_1x from "../public/assets/blog/ramsey-theory-party-problem/k6-pigeonhole@1x.png";
import ramseyTheoryPartyProblemK6Pigeonhole_2x from "../public/assets/blog/ramsey-theory-party-problem/k6-pigeonhole@2x.png";
import ramseyTheoryPartyProblemK6RedOrBlueTriangle_1x from "../public/assets/blog/ramsey-theory-party-problem/k6-red-or-blue-triangle@1x.png";
import ramseyTheoryPartyProblemK6RedOrBlueTriangle_2x from "../public/assets/blog/ramsey-theory-party-problem/k6-red-or-blue-triangle@2x.png";
import profile_1x from "../public/assets/profile/profile@1x.jpg";
import profile_2x from "../public/assets/profile/profile@2x.jpg";

export const KnownImagePath = {
  PROFILE: "/assets/profile/profile.jpg",
  AOC_2021_REFLECTIONS_COVER:
    "/assets/blog/aoc-2021-reflections/tzyl-aoc2021.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_BLUE:
    "/assets/blog/ramsey-theory-party-problem/k3-graph-blue.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_RED:
    "/assets/blog/ramsey-theory-party-problem/k3-graph-red.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K5_COUNTEREXAMPLE:
    "/assets/blog/ramsey-theory-party-problem/k5-counterexample.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K6_GRAPH:
    "/assets/blog/ramsey-theory-party-problem/k6-graph.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K6_PIGEONHOLE:
    "/assets/blog/ramsey-theory-party-problem/k6-pigeonhole.png",
  RAMSEY_THEORY_PARTY_PROBLEM_K6_RED_OR_BLUE_TRIANGLE:
    "/assets/blog/ramsey-theory-party-problem/k6-red-or-blue-triangle.png",
} as const;
export type KnownImagePath = typeof KnownImagePath[keyof typeof KnownImagePath];

export const KNOWN_IMAGE_METADATA: Record<
  KnownImagePath,
  { oneX: StaticImageData; twoX: StaticImageData }
> = {
  [KnownImagePath.PROFILE]: {
    oneX: profile_1x,
    twoX: profile_2x,
  },
  [KnownImagePath.AOC_2021_REFLECTIONS_COVER]: {
    oneX: tzylAoc2021_1x,
    twoX: tzylAoc2021_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_BLUE]: {
    oneX: ramseyTheoryPartyProblemK3GraphBlue_1x,
    twoX: ramseyTheoryPartyProblemK3GraphBlue_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K3_GRAPH_RED]: {
    oneX: ramseyTheoryPartyProblemK3GraphRed_1x,
    twoX: ramseyTheoryPartyProblemK3GraphRed_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K5_COUNTEREXAMPLE]: {
    oneX: ramseyTheoryPartyProblemK5Counterexample_1x,
    twoX: ramseyTheoryPartyProblemK5Counterexample_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K6_GRAPH]: {
    oneX: ramseyTheoryPartyProblemK6Graph_1x,
    twoX: ramseyTheoryPartyProblemK6Graph_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K6_PIGEONHOLE]: {
    oneX: ramseyTheoryPartyProblemK6Pigeonhole_1x,
    twoX: ramseyTheoryPartyProblemK6Pigeonhole_2x,
  },
  [KnownImagePath.RAMSEY_THEORY_PARTY_PROBLEM_K6_RED_OR_BLUE_TRIANGLE]: {
    oneX: ramseyTheoryPartyProblemK6RedOrBlueTriangle_1x,
    twoX: ramseyTheoryPartyProblemK6RedOrBlueTriangle_2x,
  },
};

export const getKnownImagePath = (src: string | undefined): KnownImagePath => {
  if (!isKnownImagePath(src)) {
    throw new Error(`Invalid known image path ${src}`);
  }
  return src;
};

export const isKnownImagePath = (
  src: string | undefined
): src is KnownImagePath => {
  return (
    src != null && Object.values(KnownImagePath).includes(src as KnownImagePath)
  );
};
