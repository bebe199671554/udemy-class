

export interface CommonQueryConditionByUser {
  pageIndex: number;
  pageSize: number;
  userId: string;
}
export interface CommonPagedData<T> {
  filterCount: number;
  items: T[];
}



export interface CourseQueryCondition {

}

export interface CourseModel {
  count: number;
  next: string;
  previous?: any;
  results: Course[];
  aggregations: Aggregation[];
  search_tracking_id: string;
}

export interface Aggregation {
  options: Option[];
  id: string;
  title: string;
}


export interface Option {
  count: number;
  value: string;
  key: string;
  title: string;
}

export interface Course {
  _class: string;
  id: number;
  title: string;
  url: string;
  is_paid: boolean;
  price: string;
  price_detail: PriceDetail;
  price_serve_tracking_id: string;
  visible_instructors: VisibleInstructor[];
  image_125_H: string;
  image_240x135: string;
  is_practice_test_course: boolean;
  image_480x270: string;
  published_title: string;
  tracking_id: string;
  predictive_score?: any;
  relevancy_score?: any;
  input_features?: any;
  lecture_search_result?: any;
  curriculum_lectures: any[];
  order_in_results?: any;
  curriculum_items: any[];
  headline: string;
  instructor_name?: any;
}

// _class: "user"
export interface VisibleInstructor {
  _class: string;
  title: string;
  name: string;
  display_name: string;
  job_title: string;
  image_50x50: string;
  image_100x100: string;
  initials: string;
  url: string;
}

export interface PriceDetail {
  amount: number;
  currency: string;
  price_string: string;
  currency_symbol: string;
}
