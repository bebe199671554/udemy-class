import { Injectable } from '@angular/core';
import { ConfigService } from '@udemy-class/core';
import { parsingParams } from '@udemy-class/util';
import {CourseQueryCondition,CourseModel} from '@udemy-class/model';
import { HttpClient } from '@angular/common/http';
import { ApiModule } from '../api.module';
@Injectable({
  providedIn: ApiModule,
})
export class CoursesService {

  private readonly apiRootUrl = `${this.configService.systemConfig.apiRootUrl}/api/SoftwareComputer`;
  private readonly apiUserToken = `${this.configService.systemConfig.apiUserToken}`;
  private readonly apiUserId = `${this.configService.systemConfig.apiUserId}`;

  constructor(private http: HttpClient, private configService: ConfigService) {}
// get /api-2.0/courses/?page=1&page_size=10
// {
//   "Accept": "application/json, text/plain, */*",
//   "Authorization": "Basic V1NJT3E5YThCWUI5cTFNd0lPOGVlOFpTTG1HeGxnMG1XNGV5WFJYMjpheDRGYUw2RlZtV3VTZmY2NG9CSWxCdzdjUm5rZG5SZkltQVJkaE84akQyRDVEeEhhQml3MWduZU5QR2E1VnUzU2pyNm5ndXpCMGdwWmgydGVubE1qV3Yzb0xma3R4aXh4Q0E3TnU5SDRvRG91cjh5UXF0NXRJczJ3ZFBxWjRYcg==",
//   "Content-Type": "application/json;charset=utf-8"
// }

  getCoursesList(query: CourseQueryCondition) {
    const params = parsingParams(query);
    return this.http.get<CourseModel>(
      `${this.apiRootUrl}/GetList`,
      { params }
    );
  }


}
