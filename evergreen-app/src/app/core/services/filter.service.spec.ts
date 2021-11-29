import { LocalStorageService } from 'ngx-webstorage';
import { TestBed } from "@angular/core/testing";
import { FilterService } from "./filter.service";
import { mockProvider } from '@ngneat/spectator';
// import { of } from 'rxjs';

describe('AuthService', () => {

  let service: FilterService;
  const mockLocalService = jasmine.createSpyObj('mockLocalService', [
      'retrieve',
      'store',
      'observe'
  ]);


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterService,
        mockProvider(LocalStorageService, mockLocalService)
      ]
    });
    service = TestBed.inject(FilterService);
  });

  it('should create the services', () => {
    expect(service).toBeTruthy();
    expect(mockLocalService).toBeTruthy();
  });

  it('should update filters', () => {
    service.updateFilter({ gender: 'Female', age: [20, 30] });
    expect(mockLocalService.store).toHaveBeenCalledWith('filters',
      { gender: 'Female', age: [20, 30]}
    );
  });

  // it('should return object with empty values when localstorage is empty', () => {

  //   // mockLocalService.retrieve.and.returnValue({ gender: '', age: [] });

  //   // service.loadStoragedFilters();

  //   // mockLocalService.observe.and.returnValue(of({ gender: '', age: []}));

  //   // expect()

  //   // mockLocalService.observe.and.returnValue(of({ gender: '', age: [] }));

  //   // expect(mockLocalService.observe).toHaveBeenCalledWith('filters',
  //   //   { gender: '', age: []}
  //   // );
  // });


});
