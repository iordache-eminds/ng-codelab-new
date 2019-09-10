import { MaterialModule } from './../material.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule} from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { MovieImageFallbackDirective } from './directives/movie-image-fallback.directive';
import { WordCountPipe } from './pipes/word-count.pipe';

@NgModule({
  imports : [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [MovieItemComponent, MovieListComponent, RatingComponent, MovieImageFallbackDirective, WordCountPipe],
  exports: [MovieListComponent]
})
export class MoviesModule {}
