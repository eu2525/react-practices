package ajax.controller.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}
	
	@PostMapping
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request[POST /API, Content-Type: application/json] {}", item);
		
		Long maxId = Optional
			.ofNullable(items.isEmpty() ? null : items.getFirst())
			.map(t -> t.getId())
			.orElse(0L);
		
		item.setId(maxId + 1);
		items.addFirst(item);
		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(item));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<List<Item>>> read(@PathVariable Long id) {
		items.stream().filter(t -> t.getId() == id).findAny().orElse(null);
		
		return null;
	}
	
	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /API]");
		
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items));
	}

	@DeleteMapping
	public ResponseEntity<Long> delete(@PathVariable Long id) {
		log.info("Request[DELETE /api/{}]", id);
		
		boolean result = items.removeIf(t -> t.getId() == id);
		
//		items.removeIf(new Predicate<Item>() {
//			@Override
//			public boolean test(Item t) {
//				return t.getId() == id;
//			}
//		});
		
		return ResponseEntity.status(HttpStatus.OK).body(result ? id : -1);
	}

	
	
}
