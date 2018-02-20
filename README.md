# ng-pipe-filter
Tested for angular5

## Installation
```
npm install ng-moment-pipes
```


## How to use

### imports all pipe modules
``` app.module.ts
import { StringPipesModule } from 'ng-pipe-filter'
@NgModule({
    imports: [ StringPipesModule ]
})
```

### imports partial pipe modules
``` app.module.ts
import { PipesFiltersModule } from 'ng-pipe-filter'
@NgModule({
    imports: [ PipesFiltersModule ]
})
```

## StringPipesModule
### Nl2brPipe
- change newline to br tag
### stripTags
- remove html tag
